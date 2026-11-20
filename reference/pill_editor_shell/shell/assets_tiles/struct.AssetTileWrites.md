<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-907"></a>

# Struct `pill_editor_shell::shell::assets_tiles::AssetTileWrites`

```rust
pub struct AssetTileWrites<'a>;
```

Source: `editor\pill_editor_shell\src\shell\assets_tiles.rs:66`

The handles a grid tile writes through: the selection a click moves, the
dialog a menu entry opens, the commands it queues, the regions an open menu
marks as the UI's, the path a drag out reports and the previews it draws.
One bundle keeps [`asset_tile`](fn.asset_tile.md#rustdoc-item-928)'s signature short enough for clippy's
argument budget.

## Fields

<a id="rustdoc-item-921"></a>

### `selection`

```rust
selection: &'a mut EditorSelection
```

The shared selection the tile's clicks move.

<a id="rustdoc-item-922"></a>

### `dialog`

```rust
dialog: &'a mut Option<AssetDialog>
```

The create/rename dialog the tile's menu can open.

<a id="rustdoc-item-923"></a>

### `pending`

```rust
pending: &'a mut PendingEditorCommands
```

The recorded file commands the tile's menu queues.

<a id="rustdoc-item-924"></a>

### `overlay_regions`

```rust
overlay_regions: &'a mut Vec<ShellRect>
```

The regions an open menu marks so a click inside is never a scene pick.

<a id="rustdoc-item-925"></a>

### `drag_out`

```rust
drag_out: &'a mut Option<String>
```

The asset path a drag just took out of the window: the shell writes it
once and the executable starts the system's drag with it.

<a id="rustdoc-item-926"></a>

### `previews`

```rust
previews: &'a mut pill_editor_core::session::PreviewStates
```

The preview state of every tile. A tile draws a texture when one exists
and its type icon otherwise, and records itself as drawn so the
executable asks only for the previews that are on screen.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
