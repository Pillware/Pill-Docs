<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1835"></a>

# Struct `pill_editor_core::commands::CommandInbox`

```rust
pub struct CommandInbox;
```

Source: `editor\pill_editor_core\src\commands.rs:1075`

The world resource that carries a frame's executed command ids to the
modules that own them.

A module reads its own ids in a system of its own. The shell cannot call
into a module's code, and a reloadable module must not hand function
pointers across the reload boundary.

## Fields

<a id="rustdoc-item-1834"></a>

### `executed`

```rust
executed: Vec<String>
```

Command ids executed this frame, in execution order.

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
- `Default`
- `Resource`
