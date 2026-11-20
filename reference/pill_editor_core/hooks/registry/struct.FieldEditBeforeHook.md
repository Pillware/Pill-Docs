<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5864"></a>

# Struct `pill_editor_core::hooks::registry::FieldEditBeforeHook`

```rust
pub struct FieldEditBeforeHook;
```

Source: `editor\pill_editor_core\src\hooks\registry.rs:93`

A field-edit before-callback, erased to plain data.

The callback is stored as an address because a `fn` pointer with the
component's type parameters has no common type across components. The
applier that turns it back into the typed function is stored beside it, so
the pair can only have been built by
[`FieldEditBeforeHook::of`](Self) with one `T`.

## Fields

<a id="rustdoc-item-5861"></a>

### `callback`

```rust
callback: usize
```

The typed callback, as an address; see [`HookCallback`](enum.HookCallback.md#rustdoc-item-5860).

<a id="rustdoc-item-5863"></a>

### `apply`

```rust
apply: unsafe fn (_: usize, _: &mut crate::hooks::HookContext<'_>, _: &crate::hooks::FieldEditView<'_>) -> crate::hooks::HookVerdict
```

The monomorphized applier that casts the address back and calls it.

## Associated functions and methods

<a id="rustdoc-item-5865"></a>

### `of`

```rust
pub(crate) fn of<T: pill_engine::ComponentFields>(callback: fn (_: &mut HookContext<'_>, _: &crate::hooks::FieldEdit<'_, T>) -> HookVerdict) -> Self;
```

Erases one typed before-callback for component `T`.

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
