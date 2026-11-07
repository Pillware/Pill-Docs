<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1162"></a>

# Struct `pill_editor_core::editor_state::EditorSnapshot`

```rust
pub struct EditorSnapshot;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:652`

The complete per-refresh view the editor renders.

It is captured from a live engine on every frame and published as a world
resource. The shell and the executable's dumps read the captured copy.

## Fields

<a id="rustdoc-item-3502"></a>

### `revision`

```rust
revision: u64
```

The editor's frame index at capture time.

<a id="rustdoc-item-3503"></a>

### `entities`

```rust
entities: Vec<EntityListEntry>
```

One row per live entity. This is the tier whose cost grows with the
world.

<a id="rustdoc-item-3504"></a>

### `detail`

```rust
detail: Option<EntityDetail>
```

Detail of the selected entity, if the selection is still alive.

<a id="rustdoc-item-3505"></a>

### `selected_details`

```rust
selected_details: Vec<EntityDetail>
```

The detail of every selected entity, in selection order. The Inspector
draws the primary's rows and reads this to find which other selected
entities a component edit can reach, and which rows the selection
disagrees on. Bounded by [`SELECTED_DETAILS_MAX`](constant.SELECTED_DETAILS_MAX.md#rustdoc-item-2661).

<a id="rustdoc-item-3506"></a>

### `systems`

```rust
systems: Vec<SystemSummary>
```

Registered systems with owner labels.

<a id="rustdoc-item-3507"></a>

### `components`

```rust
components: Vec<RegisteredComponent>
```

Every registered component type, and whether the add picker can offer
it.

<a id="rustdoc-item-3508"></a>

### `assets`

```rust
assets: Vec<AssetListing>
```

The asset browser's rows (the Assets panel).

<a id="rustdoc-item-3509"></a>

### `engine_assets`

```rust
engine_assets: Vec<EngineAsset>
```

The store's own assets that no file backs. A picker offers them beside
[`Self::assets`](#rustdoc-item-3508), badged as the engine's.

<a id="rustdoc-item-3510"></a>

### `standalone_types`

```rust
standalone_types: Vec<StandaloneTypeInfo>
```

The live standalone asset types: what a create dialog may
offer.

<a id="rustdoc-item-3511"></a>

### `asset_detail`

```rust
asset_detail: Option<AssetDetail>
```

The selected asset's detail: the Inspector's asset
section.

<a id="rustdoc-item-3512"></a>

### `paused`

```rust
paused: bool
```

Whether the engine's system phase is paused.

<a id="rustdoc-item-3513"></a>

### `gizmo`

```rust
gizmo: crate::gizmo::GizmoSettings
```

The gizmo tool's settings: mode, space and snapping. The Scene tab's
context menu checks its items against them.

<a id="rustdoc-item-3514"></a>

### `grid_enabled`

```rust
grid_enabled: bool
```

Whether the scene grid is on. The toolbox's grid row and the Scene tab's
menu check it against the renderer's switch.

<a id="rustdoc-item-3515"></a>

### `preferences`

```rust
preferences: crate::preferences::PreferencesView
```

The preferences file's values and the current project's remembered
entry. The Preferences tab's rows read them.

<a id="rustdoc-item-3517"></a>

### `theme`

```rust
theme: pill_ui_theme::Theme
```

The theme the editor's UI paints with: the code
default merged with the user's and the project's layers.

<a id="rustdoc-item-3519"></a>

### `theme_generation`

```rust
theme_generation: u64
```

The generation the executable last resolved the theme at. It moves
whenever a layer, an override or a font changes. The shell installs
[`Self::theme`](#rustdoc-item-3517) when this differs from the generation it applied.

<a id="rustdoc-item-3520"></a>

### `theme_layers`

```rust
theme_layers: Vec<crate::style::ThemeLayerInfo>
```

The layers [`Self::theme`](#rustdoc-item-3517) was merged from, in apply order. The code
default is always first.

<a id="rustdoc-item-3522"></a>

### `theme_fonts`

```rust
theme_fonts: crate::kit::style::ThemeFonts
```

The font bytes the theme's layers resolved, installed
with the theme.

<a id="rustdoc-item-3524"></a>

### `undo_depth`

```rust
undo_depth: usize
```

How many steps the undo history holds. The menu bar's Undo row greys
out at zero.

<a id="rustdoc-item-3525"></a>

### `redo_depth`

```rust
redo_depth: usize
```

How many steps the redo history holds.

<a id="rustdoc-item-3526"></a>

### `scene_title`

```rust
scene_title: String
```

What the title bar shows for the open scene: the file name, or
`untitled`, with a trailing `*` while it has unsaved edits.

<a id="rustdoc-item-3527"></a>

### `scene_open`

```rust
scene_open: bool
```

Whether a scene file is open. Save greys out when nothing is.

<a id="rustdoc-item-3528"></a>

### `scene_save_path`

```rust
scene_save_path: String
```

Where Save As writes by default: the open scene's path, or
`scenes/untitled.scene` when no scene file is open.

<a id="rustdoc-item-3529"></a>

### `commands`

```rust
commands: Vec<crate::commands::CommandView>
```

Every registered command in registration order. The menu bar draws a
row per command whose menu path names the menu, and a spec that is not
here has no row.

<a id="rustdoc-item-3530"></a>

### `console`

```rust
console: crate::console::ConsoleView
```

The Console tab's filters and newest rows.

<a id="rustdoc-item-3531"></a>

### `problems`

```rust
problems: Vec<crate::notices::ProblemRow>
```

Build errors and warnings, one row per diagnostic with the module that
reported it.

<a id="rustdoc-item-3533"></a>

### `errors`

```rust
errors: Vec<String>
```

Command failures handed to the capture. Both executables pass an empty
list and report failures in the Console instead.

<a id="rustdoc-item-3534"></a>

### `resources`

```rust
resources: Vec<ResourceView>
```

The editable world resources and their field values.

## Associated functions and methods

<a id="rustdoc-item-3536"></a>

### `capture_engine_tiers`

```rust
pub fn capture_engine_tiers(engine: &Engine, revision: u64, extension_names: &[String], errors: Vec<String>) -> Self;
```

Builds the tiers this crate can read from a live engine. It never
mutates the world.

This is a partial build, and the name says so. It fills the tiers the
model crate can read for itself: `entities`, `systems`, `components`,
the command registry, the console, the problems, the resources, the
scene's document state, and the paused, gizmo and grid settings. It
leaves the rest for the frame's caller to supply before publishing:

- `assets`, `engine_assets`, `standalone_types` and `asset_detail` (the
  listing the executable walks),
- `detail` and `selected_details` (the selected entities' rows),
- `preferences` (the reader's view of the preferences document),
- the four theme fields (the executable resolves the layers),
- `undo_depth` and `redo_depth` (the executable owns the history).

The shell only ever reads the published value, so a tier added here
still has to be filled, or published, by the executable.

<a id="rustdoc-item-3537"></a>

### `changed_fields`

```rust
pub fn changed_fields(self: &Self, current: &Self) -> String;
```

Returns the snapshot fields that differ from `previous`, comma-joined.

The redraw cadence treats any change as a reason to draw, so this
answers the question that follows: which fields moved. A field that
changes on its own, such as a timer, a counter or an unordered
collection, would keep the editor drawing forever. Naming it in the log
is how that is caught rather than suspected.

This is also the change test itself, so an empty answer means the two
captures draw the same data. Four fields are deliberately not compared,
so a capture that only added log lines is not a reason to draw: the
frame index, `theme_fonts` (a font change always moves the theme
generation, which is compared) and the two tiers a frame feeds itself,
the console and the problems. The test lives here, beside the fields it
walks, so a new field is one line away from the decision that has to
include it.

<a id="rustdoc-item-3538"></a>

### `capture_resources`

```rust
pub(in editor_state) fn capture_resources(engine: &Engine) -> Vec<ResourceView>;
```

Reads the editable resources' values through their curated tables.

The engine keeps no resource reflection, so a resource that is not in
[`crate::resources::EDITABLE_RESOURCES`](../resources/constant.EDITABLE_RESOURCES.md#rustdoc-item-2488) is not captured at all, because
there is nothing to read it through. Every row of a table reads, because
the table is the same one the write path goes through.

<a id="rustdoc-item-3539"></a>

### `capture_entities`

```rust
pub fn capture_entities(engine: &Engine) -> Vec<EntityListEntry>;
```

Builds the entity tier: one row per live entity, each with owned label
strings. This is the tier whose cost grows with the world, and a
200k-entity world spends real time here in debug builds.

The editor captures it every frame because the rows must follow a
system that spawns, despawns or recomposes an entity. Caching would need
a change signal the world does not expose: `entity_count` alone misses
a spawn and a despawn in the same frame.

<a id="rustdoc-item-3540"></a>

### `capture_systems`

```rust
pub fn capture_systems(engine: &Engine, extension_names: &[String]) -> Vec<SystemSummary>;
```

Builds the system tier: one summary per registered system. It is cheap.

<a id="rustdoc-item-3541"></a>

### `capture_components`

```rust
pub fn capture_components(engine: &Engine) -> Vec<RegisteredComponent>;
```

Builds the component tier: every registered component type and whether
it can be added. It is cheap.

<a id="rustdoc-item-3542"></a>

### `capture_detail`

```rust
pub fn capture_detail(engine: &Engine, entity: Entity) -> Option<EntityDetail>;
```

Rebuilds the expensive detail tier for one selected entity.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `SerializableAny`
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
- `Clone`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Resource`
