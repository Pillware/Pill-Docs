<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-23"></a>

# Struct `pill_editor::drag_out::EditorDropSource`

```rust
pub struct EditorDropSource;
```

Source: `editor\pill_editor\src\drag_out.rs:49`

The drop source OLE calls while the drag runs.

## Associated functions and methods

<a id="rustdoc-item-135"></a>

### `cast`

```rust
pub(in drag_out) unsafe fn cast<I: ::windows_core::Interface>(self: &Self) -> ::windows_core::Result<I>;
```

Try casting as the provided interface

#### Safety

This function can only be safely called if `self` has been heap allocated and pinned using
the mechanisms provided by `implement` macro.

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
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `ComObjectInner`
- `From<EditorDropSource>`
- `AsImpl<EditorDropSource>`
