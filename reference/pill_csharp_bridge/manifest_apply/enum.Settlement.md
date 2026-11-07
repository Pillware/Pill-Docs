<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-975"></a>

# Enum `pill_csharp_bridge::manifest_apply::Settlement`

```rust
pub(crate) enum Settlement { ... }
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:104`

What an arriving declaration means for a live binding.

This is the one decision the pipeline cannot make for itself: whether the
stored bytes are still valid under the arriving shape depends on layouts,
and only the kind knows how its layouts compare.

## Variants

<a id="rustdoc-item-1539"></a>

### `Unchanged`

```rust
Unchanged
```

The live binding already describes the arriving declaration.

<a id="rustdoc-item-1540"></a>

### `Reshaped`

```rust
Reshaped
```

The shape moved, so the stored bytes have to migrate.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
