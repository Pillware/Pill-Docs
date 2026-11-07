<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-512"></a>

# Struct `pill_editor_core::browser::ProjectBrowser`

```rust
pub struct ProjectBrowser;
```

Source: `editor\pill_editor_core\src\browser.rs:97`

The Assets tab's project browser: the state both panes share.

It lives for one session, like the viewport toolbox: a restart starts the
browser at the project's asset root. The state sits in the shared `dylib`
with the rest of the session, so a shell reload keeps the folder the user
was looking at.

## Fields

<a id="rustdoc-item-505"></a>

### `folder`

```rust
folder: String
```

The folder the grid lists, as a path from the asset root: empty for the
root itself.

<a id="rustdoc-item-506"></a>

### `expanded`

```rust
expanded: std::collections::BTreeSet<String>
```

The folders whose tree rows are open, so their children are shown.

<a id="rustdoc-item-508"></a>

### `tile_size`

```rust
tile_size: f32
```

The tile size the grid draws, in points.

<a id="rustdoc-item-509"></a>

### `tile_rects`

```rust
tile_rects: Vec<(String, [f32; 4])>
```

Each tile's last logged rectangle, keyed by the tile's path. A
rectangle is logged once per placement, so a test suite can drag a
tile without reading pixels.

<a id="rustdoc-item-510"></a>

### `tree_rects`

```rust
tree_rects: Vec<(String, [f32; 4])>
```

Each folder tree row's last logged rectangle, keyed by the folder. A
test suite right-clicks a row through it without reading pixels.

<a id="rustdoc-item-511"></a>

### `pane_rect`

```rust
pane_rect: Option<[f32; 4]>
```

The grid pane's last logged rectangle. A right-click on the empty space
inside it opens the open folder's menu.

## Associated functions and methods

<a id="rustdoc-item-513"></a>

### `open`

```rust
pub fn open(self: &mut Self, folder: &str) -> bool;
```

Opens `folder` in the grid and returns whether the open folder changed.

The call logs the `[editor] browser folder` line the suites watch. The
folder's ancestors open in the tree too, so the tree always shows where
the grid is looking.

<a id="rustdoc-item-514"></a>

### `toggle_expanded`

```rust
pub fn toggle_expanded(self: &mut Self, folder: &str) -> bool;
```

Opens a closed folder's tree row, or closes an open one, and returns
whether the folder is now open.

<a id="rustdoc-item-515"></a>

### `is_expanded`

```rust
pub fn is_expanded(self: &Self, folder: &str) -> bool;
```

Returns whether the tree shows `folder` open.

<a id="rustdoc-item-516"></a>

### `expand_ancestors`

```rust
pub fn expand_ancestors(self: &mut Self, path: &str);
```

Opens every ancestor of `path` in the tree, so the tree shows the
folder that holds it.

<a id="rustdoc-item-517"></a>

### `settle`

```rust
pub fn settle(self: &mut Self, assets: &[AssetListing]) -> bool;
```

Moves the open folder to the nearest one the listing still holds, when
the open folder has vanished: it was deleted or renamed, or the project
reloaded onto another tree. Returns whether the open folder changed.

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
- `StructuralPartialEq`
- `PartialEq`
- `Default`
