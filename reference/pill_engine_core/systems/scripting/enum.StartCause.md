<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4763"></a>

# Enum `pill_engine_core::systems::scripting::StartCause`

```rust
pub enum StartCause { ... }
```

Source: `engine\pill_engine_core\src\systems\scripting.rs:254`

What made a script start running.

## Variants

<a id="rustdoc-item-10677"></a>

### `PlayEntered`

```rust
PlayEntered
```

Play was pressed, so a script the edit world already held started
running.

<a id="rustdoc-item-10678"></a>

### `SpawnedDuringPlay`

```rust
SpawnedDuringPlay
```

The component was added while the game was running, so it starts on the
frame it appears.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
