<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5075"></a>

# Struct `pill_editor_core::hooks::context::HookContext`

```rust
pub struct HookContext<'a>;
```

Source: `editor\pill_editor_core\src\hooks\context.rs:176`

What a callback reads and queues while it runs.

The world is the live one, so a callback reads any component and resource
the editor holds. The selection is a copy taken before the call: a callback
cannot change it through this view, because a selection change is a recorded
command.

## Fields

<a id="rustdoc-item-5068"></a>

### `world`

```rust
world: &'a mut pill_engine::World
```

The live world.

<a id="rustdoc-item-5069"></a>

### `selection`

```rust
selection: &'a crate::editor_state::EditorSelection
```

The shared selection as it was when the call began.

<a id="rustdoc-item-5070"></a>

### `queue`

```rust
queue: &'a mut HookQueue
```

The commands the callback queued.

<a id="rustdoc-item-5071"></a>

### `notices`

```rust
notices: &'a mut Vec<HookNotice>
```

The notices the callback posted.

<a id="rustdoc-item-5072"></a>

### `cause`

```rust
cause: crate::hooks::events::FieldEditCause
```

What made the edit happen.

<a id="rustdoc-item-5074"></a>

### `source`

```rust
source: &'a str
```

The callback this context belongs to, as it registered.

## Associated functions and methods

<a id="rustdoc-item-5076"></a>

### `new`

```rust
pub(crate) fn new(world: &'a mut World, selection: &'a EditorSelection, queue: &'a mut HookQueue, notices: &'a mut Vec<HookNotice>, cause: FieldEditCause, source: &'a str) -> Self;
```

Builds the context one call sees.

<a id="rustdoc-item-5077"></a>

### `world`

```rust
pub fn world(self: &Self) -> &World;
```

The live world.

<a id="rustdoc-item-5078"></a>

### `world_mut`

```rust
pub fn world_mut(self: &mut Self) -> &mut World;
```

The live world, for a callback that edits it directly.

<a id="rustdoc-item-5079"></a>

### `selection`

```rust
pub fn selection(self: &Self) -> &EditorSelection;
```

The shared selection as it was when the call began.

<a id="rustdoc-item-5080"></a>

### `gizmo`

```rust
pub fn gizmo(self: &Self) -> Option<&crate::gizmo::GizmoState>;
```

The gizmo's settings, when the world holds a gizmo.

<a id="rustdoc-item-5081"></a>

### `active_tool`

```rust
pub fn active_tool(self: &Self) -> Option<String>;
```

The active tool's name, when a tool is active.

<a id="rustdoc-item-5082"></a>

### `viewport`

```rust
pub fn viewport(self: &Self) -> crate::viewport::EditorViewportState;
```

The editor's viewports as the executable last published them.

The empty posture when nothing published one, so a callback can read
this unconditionally.

<a id="rustdoc-item-5084"></a>

### `cause`

```rust
pub fn cause(self: &Self) -> FieldEditCause;
```

What made the edit happen.

<a id="rustdoc-item-5085"></a>

### `queue`

```rust
pub fn queue(self: &mut Self, command: EditorCommand);
```

Queues a command to run right after the edit being reported, inside the
same undo step.

Dropped when the edit is a history replay: the step already holds the
result. A command queued this way never fires the callbacks again.

<a id="rustdoc-item-5086"></a>

### `queue_gizmo`

```rust
pub fn queue_gizmo(self: &mut Self, mode: Option<GizmoMode>, space: Option<GizmoSpace>, snap: Option<bool>);
```

Queues a gizmo change: the tool, its space or its snapping.

Not recorded: a tool choice is a control, not an edit, so it adds no
history step and undo never walks back over it. A field left as `None`
keeps its current value. Dropped under a replay, like every other
queued command.

<a id="rustdoc-item-5087"></a>

### `queue_add_component`

```rust
pub fn queue_add_component(self: &mut Self, entity: Entity, component: &str);
```

Queues the recorded attach of a zero-initialised component, under the
Inspector's `add {short}` label.

The command joins the batch that is applying, so one undo removes the
component together with the edit that added it.

<a id="rustdoc-item-5088"></a>

### `queue_remove_component`

```rust
pub fn queue_remove_component(self: &mut Self, entity: Entity, component: &str);
```

Queues the recorded detach of a component, under the Inspector's
`remove {short}` label.

Removing an entity's last component destroys the entity, exactly as the
Inspector's own remove does.

<a id="rustdoc-item-5089"></a>

### `queue_create_entity`

```rust
pub fn queue_create_entity(self: &mut Self);
```

Queues the recorded creation of one empty entity, under the Entities
tab's `new entity` label.

<a id="rustdoc-item-5090"></a>

### `queue_destroy_entity`

```rust
pub fn queue_destroy_entity(self: &mut Self, entity: Entity);
```

Queues the recorded destroy of one entity, under the Entities tab's
`delete entity` label.

The selection clears first, as the tab's own delete does, so one undo
restores the entity and the selection that pointed at it. A handle is
valid for this call only: undoing the destroy assigns a fresh one.

<a id="rustdoc-item-5091"></a>

### `queue_selection`

```rust
pub fn queue_selection(self: &mut Self, entities: Vec<Entity>);
```

Queues a recorded selection change.

The selected asset is kept, so selecting entities does not drop the file
the Assets panel shows. One undo puts the previous selection back.

<a id="rustdoc-item-5092"></a>

### `selected_asset`

```rust
pub(in hooks::context) fn selected_asset(self: &Self) -> Option<String>;
```

The selected asset's path, which the selection commands keep.

<a id="rustdoc-item-5093"></a>

### `post_notice`

```rust
pub fn post_notice<impl Into<String>: Into<String>>(self: &mut Self, level: NoticeLevel, text: impl Into<String>);
```

Posts a notice the editor shows as a toast.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
