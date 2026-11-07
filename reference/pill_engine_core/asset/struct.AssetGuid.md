<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-974"></a>

# Struct `pill_engine_core::asset::AssetGuid`

```rust
pub struct AssetGuid;
```

Source: `engine\pill_engine_core\src\asset.rs:531`

A stable 128-bit identity for one asset.

A name is what a person writes and what a scene file carries. A guid is what
still identifies the asset after it is renamed. [`AssetManager`](struct.AssetManager.md#rustdoc-item-714) keeps an
index for each, and both point at the same slot. An asset may have a name, a
guid, both or neither.

[`AssetGuid::from_name`](#rustdoc-item-1005) builds a guid from a string with the same FNV-1a
hash that a shared component identity uses. A cooking step and the runtime
therefore compute the same value from the same fixed name without exchanging
anything. A guid that a pipeline, a file or a database already assigned is
passed to [`AssetGuid::new`](#rustdoc-item-1006) instead, and it does not have to relate to any
name.

## Fields

<a id="rustdoc-item-1004"></a>

### `0`

```rust
0: u128
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1006"></a>

### `new`

```rust
pub const fn new(raw_bits: u128) -> Self;
```

Wraps a guid that a cooking pipeline or a content database already
assigned.

<a id="rustdoc-item-1005"></a>

### `from_name`

```rust
pub const fn from_name(name: &str) -> Self;
```

Derives a guid from a name with the shared-identity hash.

This is the same function components use for their stable names, so one
fixed string gives one identity everywhere: in a build step, in the host,
and in a module that was compiled separately from either.

<a id="rustdoc-item-1007"></a>

### `value`

```rust
pub const fn value(self: Self) -> u128;
```

Returns the raw 128-bit value.

<a id="rustdoc-item-1008"></a>

### `random`

```rust
pub fn random() -> Result<Self, getrandom::Error>;
```

Builds a new guid from the operating system's random source.

This is what an asset's metadata file gets when it is first written. The
guid is deliberately unrelated to the asset's path: a guid derived from
the path would be handed to whatever file took that path later, and a
stale reference would then point at the wrong asset instead of at
nothing.

#### Errors

Returns the `getrandom` error when the platform has no usable random
source.

<a id="rustdoc-item-1010"></a>

### `parse`

```rust
pub fn parse(text: &str) -> Option<Self>;
```

Parses exactly 32 hexadecimal digits, the form
[`Display`](std::fmt::Display) writes.

Returns `None` for any other text; either letter case is accepted.

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
- `ToString`
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
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `PartialOrd`
- `Ord`
- `Hash`
- `Display`
- `Serialize`
- `Deserialize<'de>`
