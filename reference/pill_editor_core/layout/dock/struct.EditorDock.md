<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5205"></a>

# Struct `pill_editor_core::layout::dock::EditorDock`

```rust
pub struct EditorDock;
```

Source: `editor\pill_editor_core\src\layout\dock.rs:252`

The editor's dock: an `egui_dock` state with the editor's default
layout.

The shell keeps one of these in its session resource, so a reload of the
shell module finds the dock exactly where the user left it. Persistence
carries it across restarts.

## Fields

<a id="rustdoc-item-5199"></a>

### `schema_version`

```rust
schema_version: u32
```

The schema this document was written with.

<a id="rustdoc-item-5201"></a>

### `panel_ids`

```rust
panel_ids: Vec<String>
```

The panel id that each module tab's slot meant when the document was
written. A slot number means nothing to the next run, but the id does,
so a panel that registers again finds its tab.

<a id="rustdoc-item-5202"></a>

### `popouts`

```rust
popouts: Vec<EditorTab>
```

The tabs popped out into their own OS windows. A popped-out tab is
*not* in the dock tree; redocking puts it back in the focused leaf.

<a id="rustdoc-item-5203"></a>

### `state`

```rust
state: egui_dock::DockState<EditorTab>
```

The dock's tabs and splits.

## Associated functions and methods

<a id="rustdoc-item-5206"></a>

### `new`

```rust
pub fn new() -> Self;
```

A dock with the default layout: the game and scene viewports tabbed
together in the center, the entity list as the left column, the
inspector above the system list on the right, and the assets, console,
problems and statistics tabs as a bottom row across the window.

<a id="rustdoc-item-5208"></a>

### `state`

```rust
pub fn state(self: &Self) -> &DockState<EditorTab>;
```

The dock state, for reading. `egui_dock` edits the tree while it
draws, so the shell goes through [`EditorDock::state_mut`](#rustdoc-item-5207) instead and
this handle is for queries.

<a id="rustdoc-item-5207"></a>

### `state_mut`

```rust
pub fn state_mut(self: &mut Self) -> &mut DockState<EditorTab>;
```

The dock state, mutably: the shell runs the tabs through this, and
`egui_dock` applies drags and closes to it directly.

<a id="rustdoc-item-5209"></a>

### `schema_version`

```rust
pub fn schema_version(self: &Self) -> u32;
```

The schema version the document carries.

<a id="rustdoc-item-5210"></a>

### `set_schema_version`

```rust
pub fn set_schema_version(self: &mut Self, version: u32);
```

Stamp the document with `version`: what a migration does before it is
written back.

<a id="rustdoc-item-5211"></a>

### `contains`

```rust
pub fn contains(self: &Self, tab: EditorTab) -> bool;
```

Whether `tab` is docked somewhere: the main surface or a window.

<a id="rustdoc-item-5212"></a>

### `next_scene_view`

```rust
pub fn next_scene_view(self: &Self) -> EditorTab;
```

The tab a new scene view takes: one past the highest view index the
dock holds today.

Highest plus one, rather than the number of views, so a view the user
closed in the middle never hands its index to a second tab. The
frontend keeps one window, surface and camera per view index for the
whole session, so a new tab on a reused index would take over the
closed view's window and camera.

<a id="rustdoc-item-5213"></a>

### `scene_view_count`

```rust
pub fn scene_view_count(self: &Self) -> usize;
```

How many scene view slots the dock needs: one past its highest view
index. The frontend holds one window, surface and camera per slot, so
the count has to reach the highest index in use, not the number of
views.

A popped-out view counts too: it is still a view, with its child
window replaced by a window of its own, and it reports its rectangle
through that slot.

<a id="rustdoc-item-5214"></a>

### `can_open_scene_view`

```rust
pub fn can_open_scene_view(self: &Self) -> bool;
```

Whether one more scene view fits. Each view is a child window and a
renderer surface, so the frontend's limit is the dock's too.

<a id="rustdoc-item-5215"></a>

### `is_current`

```rust
pub(crate) fn is_current(self: &Self) -> bool;
```

Whether the document was written by this build's schema.

<a id="rustdoc-item-5216"></a>

### `set_panel_ids`

```rust
pub fn set_panel_ids(self: &mut Self, panel_ids: Vec<String>);
```

Record the registry's panel ids, so the module tabs a save writes can be
found again by id on the next run.

<a id="rustdoc-item-5217"></a>

### `panel_ids`

```rust
pub fn panel_ids(self: &Self) -> &[String];
```

The panel ids the document carried.

<a id="rustdoc-item-5218"></a>

### `popouts`

```rust
pub fn popouts(self: &Self) -> &[EditorTab];
```

The tabs popped out into their own OS windows.

<a id="rustdoc-item-5219"></a>

### `is_popped_out`

```rust
pub fn is_popped_out(self: &Self, tab: EditorTab) -> bool;
```

Whether `tab` is currently popped out.

<a id="rustdoc-item-5220"></a>

### `pop_out`

```rust
pub fn pop_out(self: &mut Self, tab: EditorTab) -> bool;
```

Pops `tab` out into its own window: it leaves the dock tree, so the
dock stops drawing it, and joins `popouts` so the next save remembers
it. Reports whether the tab was docked and moved.

<a id="rustdoc-item-5221"></a>

### `redock`

```rust
pub fn redock(self: &mut Self, tab: EditorTab) -> bool;
```

Puts a popped-out `tab` back into the focused leaf and reports whether
it was popped out.

<a id="rustdoc-item-5222"></a>

### `remap_panel_slots`

```rust
pub fn remap_panel_slots(self: &mut Self, panel_ids: &[String]);
```

Rewrite every module tab's slot from the ids the document carried to
the slots the registry assigns today.

A tab whose panel is not registered today points past the registry
(`u16::MAX`): the tab is the user's and stays, and the shell titles it
`Module panel` and draws its body as not loaded.

<a id="rustdoc-item-5223"></a>

### `settled`

```rust
pub(crate) fn settled(self: &Self) -> Self;
```

Returns a copy with placeholder geometry replaced by finite values.

A fresh dock's nodes start with `Rect::NOTHING` (`±INF`) until the
first `DockArea::show` lays them out; serde_json writes non-finite
floats as `null`, which cannot be read back. The values are
recomputed on the next show, so a zero placeholder is safe.

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
- `DeserializeOwned`
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
- `Serialize`
- `Deserialize<'de>`
- `Default`
