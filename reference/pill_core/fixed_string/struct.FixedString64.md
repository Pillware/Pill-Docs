<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-795"></a>

# Struct `pill_core::fixed_string::FixedString64`

```rust
pub struct FixedString64;
```

Source: `engine\pill_core\src\fixed_string.rs:63`

A UTF-8 string of up to [`FIXED_STRING_64_CAPACITY`](constant.FIXED_STRING_64_CAPACITY.md#rustdoc-item-796) bytes, stored inline.

It is `Copy` and `#[repr(C)]`, so it fits in a component, can cross the
module boundary, and can be mirrored into C# with no allocation. The
module documentation explains why a `String` cannot do that.

Comparison and hashing use only the bytes the string uses, so two values
holding the same text are equal however the unused bytes differ.

## Fields

<a id="rustdoc-item-797"></a>

### `storage_bytes`

```rust
storage_bytes: [u8; 64]
```

The string's bytes, stored inline in the value.

Only the first `length` bytes are in use. Every constructor zeroes the
rest and nothing reads it, so the unused bytes are not part of the
value - which is why `PartialEq` is written by hand below.

<a id="rustdoc-item-799"></a>

### `length`

```rust
length: u8
```

How many leading bytes of `storage_bytes` hold the string.

A `u8` holds any value up to the 64-byte capacity and keeps the struct
small.

## Associated functions and methods

<a id="rustdoc-item-800"></a>

### `empty`

```rust
pub const fn empty() -> Self;
```

Returns the empty string.

<a id="rustdoc-item-802"></a>

### `new`

```rust
pub fn new(text: &str) -> Self;
```

Creates a string from `text`, cutting it to
[`FIXED_STRING_64_CAPACITY`](constant.FIXED_STRING_64_CAPACITY.md#rustdoc-item-796) bytes if it is longer.

The cut always falls on a character boundary, so the stored value is
valid UTF-8. Use [`Self::try_new`](#rustdoc-item-801) instead when the caller needs to
know that the text did not fit.

<a id="rustdoc-item-801"></a>

### `try_new`

```rust
pub fn try_new(text: &str) -> Option<Self>;
```

Creates a string from `text`, or returns `None` when it does not fit.

This is the checking version of [`Self::new`](#rustdoc-item-802). Use it where a name
must be rejected rather than shortened, for example in a content
pipeline that validates its input.

<a id="rustdoc-item-803"></a>

### `as_str`

```rust
pub fn as_str(self: &Self) -> &str;
```

Returns the stored text.

<a id="rustdoc-item-804"></a>

### `as_bytes`

```rust
pub fn as_bytes(self: &Self) -> &[u8];
```

Returns the stored text as bytes.

<a id="rustdoc-item-805"></a>

### `len`

```rust
pub const fn len(self: &Self) -> usize;
```

Returns how many bytes the string uses.

<a id="rustdoc-item-806"></a>

### `is_empty`

```rust
pub const fn is_empty(self: &Self) -> bool;
```

Returns `true` when the string holds no text.

<a id="rustdoc-item-807"></a>

### `boundary_at_or_below`

```rust
pub(in fixed_string) fn boundary_at_or_below(text: &str, limit: usize) -> usize;
```

Returns the largest character boundary of `text` at or below `limit`.

Both constructors end up here, so truncation has one rule for where
it may cut.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Receiver`
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
- `Clone`
- `Copy`
- `Serialize`
- `Deserialize<'de>`
- `Default`
- `From<FixedString64>`
- `From<String>`
- `From<&str>`
- `FromStr`
- `AsRef<str>`
- `Deref`
- `PartialEq`
- `Eq`
- `PartialEq<str>`
- `PartialEq<&str>`
- `Hash`
- `Ord`
- `PartialOrd`
- `Display`
- `Debug`
