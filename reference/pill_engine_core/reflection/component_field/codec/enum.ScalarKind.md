<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7022"></a>

# Enum `pill_engine_core::reflection::component_field::codec::ScalarKind`

```rust
pub(in reflection::component_field) enum ScalarKind { ... }
```

Visibility: `{'restricted': {'parent': 5515, 'path': '::reflection::component_field'}}` · Source: `engine\pill_engine_core\src\reflection\component_field\codec.rs:59`

The scalar primitives the field vocabulary names.

There is one entry per tag. The size table, the two codecs and the value
labels all ask this type for the tag instead of repeating the strings, so a
new scalar is added in one place. The derive emits its own tag text and must
name the same tag.

## Variants

<a id="rustdoc-item-7009"></a>

### `F32`

```rust
F32
```

A 32-bit float.

<a id="rustdoc-item-7010"></a>

### `F64`

```rust
F64
```

A 64-bit float.

<a id="rustdoc-item-7011"></a>

### `I8`

```rust
I8
```

An 8-bit signed integer.

<a id="rustdoc-item-7012"></a>

### `I16`

```rust
I16
```

A 16-bit signed integer.

<a id="rustdoc-item-7013"></a>

### `I32`

```rust
I32
```

A 32-bit signed integer.

<a id="rustdoc-item-7014"></a>

### `I64`

```rust
I64
```

A 64-bit signed integer.

<a id="rustdoc-item-7015"></a>

### `U8`

```rust
U8
```

An 8-bit unsigned integer.

<a id="rustdoc-item-7016"></a>

### `U16`

```rust
U16
```

A 16-bit unsigned integer.

<a id="rustdoc-item-7017"></a>

### `U32`

```rust
U32
```

A 32-bit unsigned integer.

<a id="rustdoc-item-7018"></a>

### `U64`

```rust
U64
```

A 64-bit unsigned integer.

<a id="rustdoc-item-7019"></a>

### `Bool`

```rust
Bool
```

A boolean, one byte.

<a id="rustdoc-item-7020"></a>

### `Usize`

```rust
Usize
```

A pointer-sized unsigned integer.

<a id="rustdoc-item-7021"></a>

### `Isize`

```rust
Isize
```

A pointer-sized signed integer.

## Associated functions and methods

<a id="rustdoc-item-7023"></a>

### `from_tag`

```rust
pub(in reflection::component_field::codec) fn from_tag(tag: &str) -> Option<Self>;
```

The kind a tag names, or `None` when the tag is not a scalar.

<a id="rustdoc-item-7024"></a>

### `tag`

```rust
pub(in reflection::component_field) fn tag(self: Self) -> &'static str;
```

The tag this kind is named by, as the derive emits it.

<a id="rustdoc-item-7025"></a>

### `size`

```rust
pub(in reflection::component_field::codec) fn size(self: Self) -> usize;
```

The size of one value in bytes.

<a id="rustdoc-item-7026"></a>

### `encode`

```rust
pub(in reflection::component_field::codec) fn encode(self: Self, field_value: &FieldValue, encoded_bytes: &mut Vec<u8>) -> bool;
```

Append one value, reporting whether it is of this kind.

<a id="rustdoc-item-7027"></a>

### `decode`

```rust
pub(in reflection::component_field::codec) fn decode(self: Self, bytes: &[u8], offset: usize) -> Option<FieldValue>;
```

Decode one value at `offset`, or `None` when the buffer is too short.

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
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
