<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2115"></a>

# Struct `pill_engine_core::ecs::archetype::ColumnLayout`

```rust
pub struct ColumnLayout;
```

Source: `engine\pill_engine_core\src\ecs\archetype.rs:295`

Runtime layout for a component whose concrete type belongs to another
language.

It describes the memory footprint of one opaque column, so its rows can be
copied in and out as raw bytes without knowing the concrete type.

A schema hash is always present: a column only exists once something
described its rows well enough to store them, so holding one of these means
the hash is known, not optional.

## Fields

<a id="rustdoc-item-2297"></a>

### `size`

```rust
size: usize
```

Size in bytes of a single component instance.

<a id="rustdoc-item-2298"></a>

### `align`

```rust
align: usize
```

Alignment in bytes required by a single component instance.

<a id="rustdoc-item-2299"></a>

### `schema_hash`

```rust
schema_hash: u64
```

Hash identifying the component's schema across language boundaries.

<a id="rustdoc-item-2300"></a>

### `blittability`

```rust
blittability: Blittability
```

Proof that rows of this shape are plain old data.

Carried so the column that stores the rows never has to re-derive the
premise: `Send`, `Sync` and the destructor-free paths all rely on it.

## Associated functions and methods

<a id="rustdoc-item-2304"></a>

### `new`

```rust
pub fn new(size: usize, align: usize, schema_hash: u64, blittability: Blittability) -> Result<Self, WorldError>;
```

Builds a layout, checking that size and alignment can describe storage.

The descriptor constructor: every layout carries a [`Blittability`](struct.Blittability.md#rustdoc-item-2145), so
no column exists without one.

#### Errors

Returns [`WorldError::DescriptorSizeZero`](../../error/enum.WorldError.md#rustdoc-item-2301),
[`WorldError::DescriptorAlignmentInvalid`](../../error/enum.WorldError.md#rustdoc-item-2302) or
[`WorldError::DescriptorLayoutInvalid`](../../error/enum.WorldError.md#rustdoc-item-2303) when the size and alignment cannot
describe an allocation.

<a id="rustdoc-item-2307"></a>

### `new_native`

```rust
pub fn new_native(size: usize, align: usize, schema_hash: u64, blittability: Blittability) -> Result<Self, WorldError>;
```

The same constructor, for a layout that came from a Rust type instead
of a manifest.

#### Errors

As [`Self::new`](#rustdoc-item-2304), except that a zero size is accepted - see
[`validate_native_component_layout`](fn.validate_native_component_layout.md#rustdoc-item-2306).

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
