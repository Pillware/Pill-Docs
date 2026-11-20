<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-119"></a>

# Enum `pill_spline::component::TangentMode`

```rust
pub enum TangentMode { ... }
```

Source: `extensions\pill_spline\modules\runtime\src\component.rs:97`

How a spline decides the tangents its segments leave and arrive with.

[`TangentMode::Auto`](#rustdoc-item-116) derives them from the neighbouring control points on
every sample, which is the behaviour a spline had before it could store
tangents at all: a mode of `Auto` samples exactly what it always did.

## Variants

<a id="rustdoc-item-116"></a>

### `Auto`

```rust
Auto
```

Each tangent follows the line between its neighbours, as the
Catmull-Rom curve does. Stored tangents are kept up to date but unused.

<a id="rustdoc-item-117"></a>

### `Aligned`

```rust
Aligned
```

The stored tangents are the curve, and a point's two stay collinear.

<a id="rustdoc-item-118"></a>

### `Broken`

```rust
Broken
```

The stored tangents are the curve, and a point's two may part: a corner
the curve does not round off.

## Associated functions and methods

<a id="rustdoc-item-120"></a>

### `from_stored`

```rust
pub fn from_stored(stored: u8) -> TangentMode;
```

The mode a stored value names, defaulting to [`TangentMode::Auto`](#rustdoc-item-116) for
a value no mode was written as.

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
- `DeserializeOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Equivalent<K>`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Default`
- `Serialize`
- `Deserialize<'de>`
