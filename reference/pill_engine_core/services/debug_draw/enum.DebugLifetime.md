<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8109"></a>

# Enum `pill_engine_core::services::debug_draw::DebugLifetime`

```rust
pub enum DebugLifetime { ... }
```

Source: `engine\pill_engine_core\src\services\debug_draw.rs:48`

How long one drawn item stays.

## Variants

<a id="rustdoc-item-8106"></a>

### `OneFrame`

```rust
OneFrame
```

Drawn in the next frame only, then dropped - the default.

<a id="rustdoc-item-8108"></a>

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Default`
