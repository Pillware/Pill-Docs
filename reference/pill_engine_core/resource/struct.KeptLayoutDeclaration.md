<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7395"></a>

# Struct `pill_engine_core::resource::KeptLayoutDeclaration`

```rust
pub struct KeptLayoutDeclaration;
```

Source: `engine\pill_engine_core\src\resource.rs:486`

What a resource type declared about the files and crates that define its
layout, as owned strings.

[`ErasedResourceOps`](struct.ErasedResourceOps.md#rustdoc-item-7359) holds the same declaration as borrowed slices, which
live in the artifact that declared them. A reader that keeps the answer past
that artifact's retirement - the development host does - copies it into this
type while the image is still mapped.

## Fields

<a id="rustdoc-item-7392"></a>

### `declaring_type_name`

```rust
declaring_type_name: String
```

Full path of the declaring type, which is stable across a reload.

<a id="rustdoc-item-7393"></a>

### `sources`

```rust
sources: Vec<String>
```

Files whose contents define the type's layout.

<a id="rustdoc-item-7394"></a>

### `dependencies`

```rust
dependencies: Vec<String>
```

Crates whose resolved version can change the type's layout.

## Associated functions and methods

<a id="rustdoc-item-7396"></a>

### `from_ops`

```rust
pub fn from_ops(resource_ops: ErasedResourceOps) -> Option<Self>;
```

Copies the declaration out of a registered type's table.

Returns `None` when the type declared nothing: that is the state that
keeps the behaviour which predates the declaration, so a caller that
gets `None` has no decision to make.

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
