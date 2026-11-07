<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3597"></a>

# Enum `pill_engine_core::debug_draw::DebugLifetime`

```rust
pub enum DebugLifetime { ... }
```

Source: `engine\pill_engine_core\src\debug_draw.rs:48`

How long one drawn item stays.

## Variants

<a id="rustdoc-item-3594"></a>

### `OneFrame`

```rust
OneFrame
```

Drawn in the next frame only, then dropped - the default.

<a id="rustdoc-item-3596"></a>

### `Seconds`

```rust
Seconds
```

Drawn every frame for this many seconds.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Default`
