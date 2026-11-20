<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4511"></a>

# Struct `pill_editor_core::gizmo::HandleStates`

```rust
pub struct HandleStates;
```

Source: `editor\pill_editor_core\src\gizmo.rs:641`

The handle the pointer is over and the handle a drag holds.

The geometry is built in this state, so a hover or a drag shows on the
handles the frame draws.

## Fields

<a id="rustdoc-item-4509"></a>

### `hovered`

```rust
hovered: Option<u32>
```

The handle under the pointer, if one is.

<a id="rustdoc-item-4510"></a>

### `active`

```rust
active: Option<u32>
```

The handle a drag holds, if one does.

## Associated functions and methods

<a id="rustdoc-item-4512"></a>

### `of`

```rust
pub fn of(self: Self, handle: u32) -> HandleState;
```

The state one handle draws in: active wins over hovered.

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
- `Equivalent<K>`
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
- `Copy`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
