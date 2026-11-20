<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5902"></a>

# Struct `pill_editor_core::hooks::registry::FieldEditAfterHook`

```rust
pub struct FieldEditAfterHook;
```

Source: `editor\pill_editor_core\src\hooks\registry.rs:123`

A field-edit after-callback, erased to plain data.

## Fields

<a id="rustdoc-item-5900"></a>

### `callback`

```rust
callback: usize
```

The typed callback, as an address; see [`HookCallback`](enum.HookCallback.md#rustdoc-item-5860).

<a id="rustdoc-item-5901"></a>

### `apply`

```rust
apply: unsafe fn (_: usize, _: &mut crate::hooks::HookContext<'_>, _: &crate::hooks::FieldEditView<'_>)
```

The monomorphized applier that casts the address back and calls it.

## Associated functions and methods

<a id="rustdoc-item-5903"></a>

### `of`

```rust
pub(crate) fn of<T: pill_engine::ComponentFields>(callback: fn (_: &mut HookContext<'_>, _: &crate::hooks::FieldEdit<'_, T>)) -> Self;
```

Erases one typed after-callback for component `T`.

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
- `Copy`
- `Debug`
