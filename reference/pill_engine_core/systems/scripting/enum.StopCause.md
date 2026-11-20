<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10715"></a>

# Enum `pill_engine_core::systems::scripting::StopCause`

```rust
pub enum StopCause { ... }
```

Source: `engine\pill_engine_core\src\systems\scripting.rs:274`

What made a script stop running.

## Variants

<a id="rustdoc-item-10752"></a>

### `PlayExited`

```rust
PlayExited
```

Play was stopped, so every running script stopped.

<a id="rustdoc-item-10753"></a>

### `Removed`

```rust
Removed
```

The component was removed while the game was running.

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
