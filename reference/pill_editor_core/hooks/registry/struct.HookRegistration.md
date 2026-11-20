<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6002"></a>

# Struct `pill_editor_core::hooks::registry::HookRegistration`

```rust
pub struct HookRegistration;
```

Source: `editor\pill_editor_core\src\hooks\registry.rs:229`

One registered callback and the marker of the crate that registered it.

## Fields

<a id="rustdoc-item-5996"></a>

### `source`

```rust
source: String
```

The crate that registered it.

<a id="rustdoc-item-5997"></a>

### `event`

```rust
event: HookEvent
```

The event it answers.

<a id="rustdoc-item-5998"></a>

### `callback`

```rust
callback: HookCallback
```

The erased callback.

<a id="rustdoc-item-5999"></a>

### `liveness`

```rust
liveness: std::sync::Weak<crate::panels::ModuleLiveness>
```

The marker of the registering module: it goes dead when the module
unloads.

## Associated functions and methods

<a id="rustdoc-item-6003"></a>

### `alive`

```rust
pub fn alive(self: &Self) -> bool;
```

Returns whether the module that registered this callback is still
loaded.

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
