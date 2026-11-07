<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-111"></a>

# Struct `pill_engine_core::archetype::Blittability`

```rust
pub struct Blittability;
```

Source: `engine\pill_engine_core\src\archetype.rs:107`

Proof that a descriptor component's rows are plain old data.

The descriptor-component design rests on one premise: a row can be moved by
copying its bytes, owns nothing, and can be freed without running
destructors. `ComponentColumn` copies rows with `ptr::copy`, frees buffers
without touching the elements, and is `Send + Sync` - and each of those is
only sound while the premise holds.

A value of this type is created by a check and stored next to the layout it
protects, so a column cannot be built without one.

## Fields

<a id="rustdoc-item-109"></a>

### `_private`

```rust
_private: ()
```

Private unit field: the only ways in are the constructors below.

## Associated functions and methods

<a id="rustdoc-item-112"></a>

### `from_manifest_fields`

```rust
pub fn from_manifest_fields() -> Self;
```

The proof a manifest-driven registration carries.

`pill_csharp_bridge::components` asks for one only for an entry that
`parse_and_validate_manifest` accepted. That check rejected every field
type that is not a blittable value type, so the entry's fields are known
to be plain data. The name records where the check ran.

<a id="rustdoc-item-113"></a>

### `assume`

```rust
pub unsafe fn assume() -> Self;
```

Claims the proof without a check.

#### Safety

Every field of the component must be a blittable value type: no
pointers, references or other owners. A caller that gets this wrong
hands `ComponentColumn` ownership it will never release.

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
- `Eq`
