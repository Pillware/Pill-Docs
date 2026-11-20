<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5123"></a>

# Struct `pill_editor_core::hooks::registry::LiveHook`

```rust
pub(crate) struct LiveHook;
```

Visibility: `crate` · Source: `editor\pill_editor_core\src\hooks\registry.rs:251`

One live callback, copied out of the registry for the drain.

## Fields

<a id="rustdoc-item-6037"></a>

### `source`

```rust
source: String
```

The crate that registered it, as the log lines name it.

<a id="rustdoc-item-6038"></a>

### `event`

```rust
event: HookEvent
```

The event it answers.

<a id="rustdoc-item-6039"></a>

### `callback`

```rust
callback: HookCallback
```

The erased callback.

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
