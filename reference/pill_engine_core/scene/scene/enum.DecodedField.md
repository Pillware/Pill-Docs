<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8041"></a>

# Enum `pill_engine_core::scene::scene::DecodedField`

```rust
pub(in scene::scene) enum DecodedField { ... }
```

Visibility: `{'restricted': {'parent': 7827, 'path': '::scene::scene'}}` · Source: `engine\pill_engine_core\src\scene\scene.rs:650`

What one document value means for the field it is written into.

## Variants

<a id="rustdoc-item-8035"></a>

### `Plain`

```rust
Plain
```

A plain value: written into the field as it is.

<a id="rustdoc-item-8037"></a>

### `Asset`

```rust
Asset
```

An asset reference to resolve against the world's assets.

<a id="rustdoc-item-8039"></a>

### `Entity`

```rust
Entity
```

An entity reference to resolve after every entity exists.

<a id="rustdoc-item-8040"></a>

### `Cleared`

```rust
Cleared
```

A `null` in a reference field, meaning the cleared handle.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
