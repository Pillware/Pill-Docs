# How gizmos are drawn

## Summary

A **component gizmo** is a drawing a component declares for itself: the curve of a spline, the wireframe of a collider. You write one function that draws one component, and the engine calls it every update for every entity that carries that component. The result is plain lines that the renderer draws over the scene.

No component and no module owns an ECS system for this. One engine-owned ECS system, the **gizmo pass**, calls every declared gizmo into one shared buffer. That buffer becomes the world's debug drawing, and the renderer draws all of it in a handful of draw calls per view. The renderer never knows which component drew which line.

A component gizmo is display only: you cannot click it. What you click in the editor are **gizmo handles**, a separate kind of drawing that only the editor produces.

## At a glance

```text
 #[component(gizmo = draw_spline_gizmo)]     the macro generates a wrapper, __pill_gizmo_Spline
        │  the module loads
        ▼
 GizmoRegistry (world resource)              one entry per component type that has a gizmo
        │  every update: post_project phase, order -1
        ▼
 component_gizmos (one ECS system)           calls each wrapper; each wrapper calls your
        │                                    function once per entity, into one buffer
        ▼
 DebugDraw (world resource)                  plain lines and labels, marked as editor chrome or not
        │  the renderer's `rendering` ECS system, order 0
        ▼
 RenderFrame.debug (DebugFrame)              one update of plain data
        │
        ▼
 the renderer's overlay pass, per view       every debug line of a view in one draw call
```

|                         | Component gizmo                                   | Gizmo handle                                           |
| ----------------------- | ------------------------------------------------- | ------------------------------------------------------ |
| Who draws it            | any component, through `#[component(gizmo = ...)]` | only the editor executable (`pill_editor`)             |
| What it is for          | showing a component's shape                       | something you click and drag                           |
| Clickable               | no                                                | yes, through the renderer's pick buffer                |
| Examples                | the spline's curve, the collider's wireframe      | the transform gizmo, a tool's points and faces         |
| Drawn in                | every development-mode run                        | the editor's Scene views                               |

## What is a gizmo, and what is a gizmo handle?

A gizmo is drawing that helps a developer see a component, but is not part of the project's image.

> **Example:** a `Spline` has no mesh, so nothing in the scene shows where it runs. Its gizmo draws the curve, a cross at each control point, and the tangent arms. A `ColliderComponent` is invisible to the renderer too, and its gizmo draws the collider's shape as a green wireframe.

A **component gizmo** is declared on the component type and drawn by the engine. It reads the component and draws lines; it cannot change the world, and it cannot be picked.

A **gizmo handle** is a line, triangle or point that carries a handle id. The renderer draws it like any other line, and it also writes the handle id into its pick buffer, so a click on it is answered with that id. Only the editor executable draws handles: the transform gizmo's arrows and rings, and the points a tool reports. A tool's handles are described in [Extending the editor inside the engine](../editor/extending_editor.md).

> **Example:** with the Spline tool active, the editor shows two layers at the same places. The crosses at the control points come from the spline's component gizmo and do nothing when clicked. The round handles drawn over them come from the Spline tool, and dragging one moves the point. On the next update, the component gizmo draws the curve from the moved point.

The editor's own drawing is called **chrome**: drag guides, gizmo handles, and every component gizmo while the editor runs. The renderer draws chrome only on editor views, never on the project's own view.

## Why is there one pass instead of one ECS system per gizmo?

So that every gizmo draws into one buffer, and the buffer reaches the renderer once.

The pass collects every line into a single `GizmoDraw` buffer and moves it into `DebugDraw` after the last gizmo ran. One ECS system per component type would need one buffer each, or would write into `DebugDraw` many times per update.

A single pass also keeps the cost of a gizmo out of the scheduler. Declaring a gizmo adds an entry to a list, not an ECS system, so the number of ECS systems does not grow with the number of gizmo types. A build that never installs the pass, such as a shipping build, pays nothing for the declarations.

## Why does the engine core draw gizmos, and not the editor?

So that a gizmo works wherever a developer looks at the project, and the engine core still names no editor type.

The pass lives in `pill_engine_core` and knows nothing about the editor. It reads one neutral resource, `GizmoSelection`, for what is selected and hovered, and the editor executable keeps it up to date. Because of that, `pill_standalone` in development mode can draw gizmos too, without linking any editor code.

The renderer names no component either. By the time anything reaches it, a gizmo is line segments and text labels in `DebugDraw`, the same resource any ECS system can draw debug lines into.

## How do I give a component a gizmo?

Declare the function on the component, and write the function next to it:

```rust
#[component(persistable, shared, gizmo = draw_spline_gizmo)]
#[repr(C)]
#[derive(Debug, Clone, Copy)]
pub struct Spline { /* ... */ }

/// Draws one spline: the curve, its control points and its tangents.
pub fn draw_spline_gizmo(spline: &Spline, context: &GizmoContext<'_>, draw: &mut GizmoDraw) {
    // ...turn the spline's points into world space with context.to_world(), then:
    draw.polyline(&curve, CURVE_COLOR);
}
```

Nothing registers it by hand. The module's entry point registers the component and its gizmo on every load and reload. Add `gizmo_when = "selected"` to draw only for the entities the editor has selected.

`GizmoContext` is what the function knows about its entity:

| Method                                        | Returns                                                  |
| --------------------------------------------- | -------------------------------------------------------- |
| `entity`, `selected`, `hovered` (fields)      | the entity, and whether the editor selected or hovers it |
| `transform()`, `translation()`, `rotation()`, `scale()` | the entity's transform, or the identity without one |
| `to_world()`                                  | the transform as a row-major matrix                      |
| `get_component::<T>()`                        | another component of the same entity                     |
| `get_component_of::<T>(entity)`               | a component of any entity                                |
| `get_resource::<T>()`                         | a resource                                               |

`GizmoDraw` is what the function draws into. Everything it draws becomes line segments, except labels:

| Method                               | Draws                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------ |
| `line`, `polyline`, `line_loop`      | one segment, a chain of segments, or a closed loop                       |
| `circle`, `sphere`, `box_outline`    | shapes, as segments                                                      |
| `point(position, size, color)`       | three short crossing segments, `size` world units long in each direction |
| `label(position, text, color)`       | text at a world position, drawn over the scene                           |

A component gizmo's `point` is a cross measured in world units. A gizmo handle's point is a mark measured in pixels. They are different primitives.

## What happens when a module loads?

The module's entry point finds the gizmos its image declares and publishes them into the world's `GizmoRegistry`. Nothing scans for exported functions.

1. **At compile time, the macro generates a wrapper and a descriptor.** `#[component(gizmo = draw_spline_gizmo)]` generates a private function, `__pill_gizmo_Spline`, that walks the entities carrying a `Spline` and calls your function for each one. It also submits a `PillComponentDescriptor` into an `inventory` collection; its `gizmo` field is a `GizmoDeclaration { type_name, owner, when, draw }`, where `owner` is the declaring package and `draw` is the wrapper.
2. **The operating system's loader runs the module's constructors.** `inventory::submit!` compiles to a static and a small constructor in the DLL's initializer section. When the host maps the DLL, the loader runs it, and the descriptor joins the collection. The host counts the collection just before mapping (`DeclarationBaseline::current()`), so the entry point can tell which entries this image added.
3. **The entry point collects the gizmos.** The host calls the module's exported `pill_module_init` (or `pill_module_register` on a reload). It reaches `register_all_components`, which keeps the entries this image added, registers each component, and gathers every `descriptor.gizmo` that is `Some`.
4. **The gizmos are published.** `GizmoRegistry::publish` copies each declaration into an owned `GizmoEntry`: the type name and owner as `String`s, the `when` choice, the `draw` pointer, and a `drew_last_frame` counter. The registry keeps its entries sorted by type name.

The names are copied because a retired module image is unloaded once two newer generations of it exist. A borrowed string would then point at freed memory. The `draw` pointer cannot be copied that way, so a reload replaces it instead (see [What happens on a hot reload?](#what-happens-on-a-hot-reload)).

## What happens every update?

The gizmo pass runs once per update, calls every wrapper once, and every wrapper calls its gizmo function once per entity.

1. **The pass starts after the project's work is done.** It runs in the `post_project` phase at order −1. The project's ECS systems, the scripts and both command flushes have already run, so it draws the final state of the update. The renderer's `rendering` ECS system runs right after it, at order 0.
2. **It reads what may draw.** If the registry is empty, or an editor switched gizmos off, it resets the counts and stops. Otherwise it builds a `GizmoFrame` from `GizmoSelection` and leaves out the types an editor has hidden.
3. **It calls each wrapper once, into one `GizmoDraw` buffer.**
4. **Each wrapper calls the gizmo function once per entity.** It walks the archetypes that hold the component, builds a `GizmoContext` for each entity, skips unselected entities when the gizmo is `ForSelected`, and calls your function. It returns how many entities it drew for, which becomes the entry's `drew_last_frame`.
5. **The buffer becomes debug drawing.** `flush_into` turns every segment into a one-update, depth-tested `DebugDraw` line, and every label into a `DebugDraw` label. In the editor every item is marked as chrome; in `pill_standalone` none is.
6. **Next update, it starts again from nothing.** The renderer collects one-update lines and drops them, so every gizmo is redrawn from the current component data.

> **Example:** the world holds 4 entities with a `Spline` and 2 with a `ColliderComponent`, and one entity has both. The pass calls two wrappers. The spline wrapper calls `draw_spline_gizmo` 4 times; the collider wrapper calls `draw_collider_outline` 2 times. The entity with both components is drawn by both, because it has two different shapes to show. All 6 calls add segments to the same buffer.

## How does the renderer draw the lines?

The renderer draws all debug lines of one view in one draw call. It does not know about gizmos.

1. **It collects one update of debug drawing.** Its `rendering` ECS system calls `DebugDraw::collect_frame` and stores the result in `RenderFrame.debug`, a `DebugFrame` from `pill_renderer_api`. Collecting drops the one-update items.
2. **It decides, per view, whether chrome draws there.** The overlay pass checks whether the view is an editor view: a surface drawn through one of the editor's own cameras. Chrome lines are skipped on every other surface. That is why the spline's curve shows in the editor's `Scene` view, and not in its `Game` view.
3. **It turns lines into geometry.** Each line is projected on the processor and widened into a screen-space quad, with an anti-aliased edge.
4. **It issues at most four draw calls per view for debug geometry**, one per kind: depth-tested lines, on-top lines, on-top triangles, on-top points. Every component gizmo line is depth-tested, so all of them, from every entity and every component, go into one draw call. Labels are text, and are drawn separately with the renderer's bitmap font.

## Which builds draw gizmos?

Only builds that run on the development host. The development host is the only code that installs the gizmo pass.

| Build                                      | The pass                         | What you see                                              |
| ------------------------------------------ | -------------------------------- | --------------------------------------------------------- |
| The editor (`pill_editor`)                 | installed, lines marked as chrome | gizmos on Scene views only, never on the Game view        |
| `pill_standalone`, development, windowed   | installed, plain debug lines     | gizmos in its one window                                  |
| `pill_standalone`, development, headless   | installed                        | nothing: there is no renderer                             |
| Shipping and web builds                    | not installed                    | nothing; the declarations are registered but never called |

In a headless development run, nothing calls `collect_frame`, and that call is the only place one-update lines are dropped. So `DebugDraw` keeps every line the pass flushes into it for as long as the host runs.

## Can I click a gizmo?

No. A component gizmo's lines go through `DebugDraw::line` and end up in `DebugFrame.lines`, which the renderer draws and never writes into its pick buffer.

Clickable drawing goes through `DebugDraw::gizmo_line`, `gizmo_triangle` and `gizmo_point`, which carry a handle id. The renderer draws those into `DebugFrame.gizmo_lines`, `gizmo_triangles` and `gizmo_points`, and also into the pick buffer as `PICK_HANDLE_BIT | handle`. Only the editor executable draws them.

> **Example:** you press on a spline point with the Spline tool active. The editor sends a pick request for that pixel. One or two updates later the answer comes back with the handle bit set. The editor maps the handle id back to "entity, control point 2", selects that element, and puts the transform gizmo on it. Dragging calls the tool, which writes the new position into the `Spline` component as one undo step. The component gizmo never knows it was involved: on the next update it draws the curve from the new data.

## What happens on a hot reload?

The reloading module publishes its gizmos again, and `publish` replaces the old pointers with the new image's.

`publish` works per owner, the package that declared the component:

1. It drops the entries of the arriving owners whose types the arriving image no longer declares.
2. It updates the entries whose types it declares again: a new `draw` pointer, `when` and owner, while keeping the `drew_last_frame` count.
3. It adds entries for new types and sorts the registry again.

`GizmoRegistry` is inserted by the host before any module registers, so a reload never drops it. It is also `PlayState::Keep`, so Play and Stop leave it alone.

### Which module's pointer does an entry hold?

The last one that published it. An image publishes the gizmos of every crate it links, not only its own. `pill_spline_editor` links `pill_spline`, so in the editor it publishes the `Spline` gizmo again after `pill_spline` does. Entries are merged by type name, so the spline is still drawn once, but its `draw` pointer can point into `pill_spline_editor`'s DLL.

### When can an entry outlive its module?

When the reloading image declares no gizmo at all. `register_all_components` only calls `publish` when the image declared at least one gizmo, and `publish` returns at once on an empty list. Nothing else removes entries.

> **Example:** you delete `Spline`, which declares `pill_spline`'s only gizmo, and save. The new `pill_spline` image publishes nothing, so the `pill_spline::Spline` entry keeps its old `draw` pointer. While the old image is still loaded, the wrapper finds no `Spline` archetypes and draws nothing. Once two newer generations exist and the graveyard unloads that image, the next call through the pointer runs code that is no longer mapped.

A module that still declares at least one other gizmo is not affected: its `publish` call drops the entry it no longer declares.

## Does the gizmo pass run in parallel?

No. It never runs beside another ECS system, and inside itself it uses one thread.

Two separate rules keep it alone. The `post_project` phase always runs sequentially, on the calling thread, because it is where the update's results are drawn. The pass also declares access to the whole world, so the scheduler would not run it next to anything else even in a parallel phase.

It cannot move to an earlier, parallel phase. It has to see the update's final state, after the scripts and the second flush, and it has to finish before `rendering` collects `DebugDraw`.

Inside, the pass is one loop that writes into one `&mut GizmoDraw`. Splitting it across the shared Rayon pool, with one buffer per task merged in a fixed order, would be possible, because gizmo functions only read. It would require every gizmo function to be safe to call from a worker thread, and it would only pay off with many gizmo entities.

## What does the pass cost?

The rendering is already batched. The cost is on the processor, in how the pass gathers its data and how many times each line is copied:

- **Repeated lookups per entity.** The wrapper already walks the archetype, but it still calls `world.get_component::<T>(entity)` for each entity, which looks the entity's location, archetype and column up again. `GizmoContext::to_world()` then reads the transform three times, once each through `rotation()`, `scale()` and `translation()`. That is four full lookups per entity per update.
- **Why not a query.** The wrapper only receives `&World`, and a `Query` is built from `&mut World`. The world is shared because every wrapper borrows it at once, and because `GizmoContext` gives the same `&World` to the gizmo function.
- **A selection test that grows with the selection.** `GizmoFrame::is_selected` is a `Vec::contains`.
- **Several copies of every line.** A segment is copied from `GizmoDraw` into `DebugDraw`, cloned into the `DebugFrame`, and expanded into six vertices by the overlay.
- **Geometry built per view.** The overlay projects and widens every line on the processor separately for each view, so three Scene views do that work three times.
- **No caching.** A spline nobody touches is still sampled and drawn again every update.

## How do I switch gizmos on and off?

In the editor, through two settings that `GizmoRegistry` holds:

| Control                                   | Command it queues                          | Effect                                              |
| ----------------------------------------- | ------------------------------------------ | --------------------------------------------------- |
| The floating toolbox's gizmo switch       | `EditorCommand::SetGizmos { enabled }`     | turns the whole pass off; it draws nothing          |
| One row per type in the Preferences tab   | `EditorCommand::SetGizmoTypeVisible { type_name, visible }` | hides or shows one component type's gizmo |

Neither records an undo step. A component's own settings can decide too: the collider's wireframe draws only while the physics settings asset turns outlines on.

## Which log lines show what the pass did?

The editor's scripted channel answers `dump gizmos` with one summary line and one line per registered gizmo, under `engine::editor`:

| Log line         | Fields                                                    | Means                                                                    |
| ---------------- | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| `[test] gizmos`  | `count`, `hidden`, `enabled`, `surfaces`                  | how many gizmos are registered, how many types are hidden, whether the pass draws |
| `[test] gizmo`   | `gizmo_type`, `owner`, `when`, `visible`, `drew`          | one entry; `drew` is how many entities it drew for in the last update    |

`drew = 0` with `visible = true` means the gizmo is registered but found no entity, or drew only for selected entities while none was selected.

## Where is this in the code?

| What                                                          | Where                                                                                           |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `GizmoRegistry`, `GizmoDeclaration`, `GizmoContext`, `GizmoDraw`, the pass | `modules/engine/pill_engine_core/src/services/gizmos.rs`                           |
| The generated wrapper and the descriptor                      | `modules/engine/pill_engine_macros/src/lib.rs` (the `#[component]` expansion)                   |
| Collecting the declarations and publishing them               | `modules/engine/pill_engine/src/component_registry.rs` (`register_all_components`)              |
| Installing the pass                                           | `modules/hosting/pill_development_host/src/runtime.rs` (`pill_engine::gizmos::install`)         |
| Inserting `DebugDraw` and `GizmoRegistry`                     | `modules/hosting/pill_player/src/runtime.rs` (`insert_debug_resources`)                         |
| `DebugDraw`, `DebugFrame`, the handle primitives              | `modules/engine/pill_engine_core/src/services/debug_draw.rs`                                    |
| Collecting `DebugDraw` into `RenderFrame.debug`               | `modules/extensions/pill_master_renderer/modules/runtime/gpu/src/frame.rs`                     |
| Drawing lines and handles, the chrome filter                  | `modules/extensions/pill_master_renderer/modules/runtime/gpu/src/overlay/mod.rs`               |
| Two real gizmos                                               | `pill_spline/modules/runtime/src/gizmo.rs` (`draw_spline_gizmo`), `pill_physics/modules/runtime/src/debug_draw.rs` (`draw_collider_outline`) |
| `dump gizmos`                                                 | `modules/editor/pill_editor/src/runner/scripted_channel.rs`                                     |

## Where to read next

- [Extending the editor inside the engine](../editor/extending_editor.md): tools, their elements and handles, and how editor modules reload.
- [How the editor works](../editor/editor_implementation.md): the editor frame, picking and the transform gizmo.
- [Rendering](../levels/rendering.md): surfaces, views and the overlay pass.
- [Hot reloading](../levels/hosting/hot_reloading.md): what a reload keeps, and when a retired image is unloaded.
