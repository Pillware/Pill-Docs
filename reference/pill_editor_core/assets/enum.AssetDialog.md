<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-13"></a>

# Enum `pill_editor_core::assets::AssetDialog`

```rust
pub enum AssetDialog { ... }
```

Source: `editor\pill_editor_core\src\assets.rs:53`

The asset dialog that is open, if any.

The create variant holds the type, folder and name the dialog will write,
plus the answer to a file of that name already existing. The rename
variant holds the current path and the typed name. The state lives in
[`crate::session::EguiShellState::asset_dialog`](../session/struct.EguiShellState.md#rustdoc-item-12), so a shell reload keeps
an open dialog exactly as it was.

## Variants

<a id="rustdoc-item-8"></a>

### `Create`

```rust
Create
```

The create dialog: a standalone type, a name and the destination
folder (relative to the asset directory; empty for its root).

<a id="rustdoc-item-11"></a>

### `Rename`

```rust
Rename
```

The rename dialog: the path being renamed and the typed new name.

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
