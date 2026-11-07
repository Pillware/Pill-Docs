<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3104"></a>

# Enum `pill_engine_core::component_field::codec::ScalarKind`

```rust
pub(in component_field) enum ScalarKind { ... }
```

Visibility: `{'restricted': {'parent': 3105, 'path': '::component_field'}}` · Source: `engine\pill_engine_core\src\component_field\codec.rs:56`

The scalar primitives the field vocabulary names.

There is one entry per tag. The size table, the two codecs and the value
labels all ask this type for the tag instead of repeating the strings, so a
new scalar is added in one place. The derive emits its own tag text and must
name the same tag.

## Variants

<a id="rustdoc-item-3091"></a>

### `F32`

```rust
F32
```

A 32-bit float.

<a id="rustdoc-item-3092"></a>

### `F64`

```rust
F64
```

A 64-bit float.

<a id="rustdoc-item-3093"></a>

### `I8`

```rust
I8
```

An 8-bit signed integer.

<a id="rustdoc-item-3094"></a>

### `I16`

```rust
I16
```

A 16-bit signed integer.

<a id="rustdoc-item-3095"></a>

### `I32`

```rust
I32
```

A 32-bit signed integer.

<a id="rustdoc-item-3096"></a>

### `I64`

```rust
I64
```

A 64-bit signed integer.

<a id="rustdoc-item-3097"></a>

### `U8`

```rust
U8
```

An 8-bit unsigned integer.

<a id="rustdoc-item-3098"></a>

### `U16`

```rust
U16
```

A 16-bit unsigned integer.

<a id="rustdoc-item-3099"></a>

### `U32`

```rust
U32
```

A 32-bit unsigned integer.

<a id="rustdoc-item-3100"></a>

### `U64`

```rust
U64
```

A 64-bit unsigned integer.

<a id="rustdoc-item-3101"></a>

### `Bool`

```rust
Bool
```

A boolean, one byte.

<a id="rustdoc-item-3102"></a>

### `Usize`

```rust
Usize
```

A pointer-sized unsigned integer.

<a id="rustdoc-item-3103"></a>

### `Isize`

```rust
Isize
```

A pointer-sized signed integer.

## Associated functions and methods

<a id="rustdoc-item-3106"></a>

### `from_tag`

```rust
pub(in component_field::codec) fn from_tag(tag: &str) -> Option<Self>;
```

The kind a tag names, or `None` when the tag is not a scalar.

<a id="rustdoc-item-3107"></a>

### `tag`

```rust
pub(in component_field) fn tag(self: Self) -> &'static str;
```

The tag this kind is named by, as the derive emits it.

<a id="rustdoc-item-3108"></a>

### `size`

```rust
pub(in component_field::codec) fn size(self: Self) -> usize;
```

The size of one value in bytes.

<a id="rustdoc-item-3109"></a>

### `encode`

```rust
pub(in component_field::codec) fn encode(self: Self, field_value: &FieldValue, encoded_bytes: &mut Vec<u8>) -> bool;
```

Append one value, reporting whether it is of this kind.

<a id="rustdoc-item-3111"></a>

### `decode`

```rust
pub(in component_field::codec) fn decode(self: Self, bytes: &[u8], offset: usize) -> Option<FieldValue>;
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
