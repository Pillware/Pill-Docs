<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9"></a>

# Struct `pill_core::dynamic_buffer::DynamicBuffer`

```rust
pub struct DynamicBuffer<T: Copy>;
```

Source: `engine\pill_core\src\dynamic_buffer.rs:69`

A growable run of plain elements living in engine-owned native memory.

The handle is `#[repr(C)]` and holds three pointer-sized words in this
order: a pointer to the elements, the element count, then the capacity. The
C# mirror reads those words straight out of the component row, so managed
code iterates the live elements without a call across the boundary.

`T: Copy` is a hard requirement, not a convenience: elements are copied
byte for byte between blocks, and the last release frees the block without
running any destructor. A type that owned anything would leak, so it cannot
be used in a buffer at all.

## Fields

<a id="rustdoc-item-5"></a>

### `element_pointer`

```rust
element_pointer: *mut T
```

Pointer to the block's element area; null while the buffer owns no
block. An empty buffer created with a capacity still points at its
block.

<a id="rustdoc-item-7"></a>

### `element_count`

```rust
element_count: usize
```

Number of initialised elements at `element_pointer`.

<a id="rustdoc-item-8"></a>

### `element_capacity`

```rust
element_capacity: usize
```

Elements the block can hold before it must grow.

## Associated functions and methods

<a id="rustdoc-item-11"></a>

### `ELEMENT_ALIGN`

```rust
const ELEMENT_ALIGN: usize = _;
```

Alignment every block holding this element type is allocated with.

<a id="rustdoc-item-12"></a>

### `new`

```rust
pub const fn new() -> Self;
```

Creates an empty buffer that owns no block.

<a id="rustdoc-item-13"></a>

### `with_capacity`

```rust
pub fn with_capacity(capacity: usize) -> Self;
```

Creates an empty buffer with room for `capacity` elements before the
first growth.

#### Panics

Panics when `capacity` is not zero and `T` is a zero-sized type, or
when the allocation request cannot be laid out.

<a id="rustdoc-item-14"></a>

### `from_slice`

```rust
pub fn from_slice(values: &[T]) -> Self;
```

Creates a buffer holding a copy of `values`.

#### Panics

Panics when `values` is not empty and `T` is a zero-sized type, or when
the allocation request cannot be laid out.

<a id="rustdoc-item-15"></a>

### `len`

```rust
pub fn len(self: &Self) -> usize;
```

Returns the number of initialised elements.

<a id="rustdoc-item-16"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Returns whether the buffer holds no elements.

<a id="rustdoc-item-17"></a>

### `capacity`

```rust
pub fn capacity(self: &Self) -> usize;
```

Returns how many elements the block can hold before it must grow.

<a id="rustdoc-item-18"></a>

### `as_ptr`

```rust
pub fn as_ptr(self: &Self) -> *const T;
```

Returns a pointer to the first element, for FFI trampolines and mirror
views.

The pointer is null only when the buffer owns no block (`new`, or
`with_capacity(0)`). A caller that passes it to managed code must also
pass [`Self::len`](#rustdoc-item-15), and treat a zero length as "no view".

<a id="rustdoc-item-19"></a>

### `as_mut_ptr`

```rust
pub fn as_mut_ptr(self: &mut Self) -> *mut T;
```

Returns a writable pointer to the first element, copying the block
first when it is shared.

<a id="rustdoc-item-20"></a>

### `as_slice`

```rust
pub fn as_slice(self: &Self) -> &[T];
```

Returns the elements as a shared slice.

<a id="rustdoc-item-21"></a>

### `as_mut_slice`

```rust
pub fn as_mut_slice(self: &mut Self) -> &mut [T];
```

Returns the elements as a mutable slice.

Copies the block first when another handle shares it, so a reader never
sees the elements change.

<a id="rustdoc-item-22"></a>

### `push`

```rust
pub fn push(self: &mut Self, value: T);
```

Appends one element, growing the buffer or copying a shared block as
needed.

#### Panics

Panics when the buffer has to grow and `T` is a zero-sized type, or
when the allocation request cannot be laid out.

<a id="rustdoc-item-23"></a>

### `extend_from_slice`

```rust
pub fn extend_from_slice(self: &mut Self, values: &[T]);
```

Appends every element of `values`.

#### Panics

Panics when the buffer has to grow and `T` is a zero-sized type, or
when the allocation request cannot be laid out.

<a id="rustdoc-item-24"></a>

### `resize`

```rust
pub fn resize(self: &mut Self, new_len: usize, value: T);
```

Changes the buffer to hold `new_len` elements.

Growing fills the new elements with `value`. Shrinking keeps the first
`new_len` elements. A growing resize past the capacity allocates a new
block, so this handle ends up as its only user; within the capacity it
copies a shared block first. Shrinking writes nothing and leaves a
shared block where it is, so a slice taken through another handle stays
valid across it.

#### Panics

Panics when the buffer has to grow and `T` is a zero-sized type, or
when the allocation request cannot be laid out.

<a id="rustdoc-item-25"></a>

### `clear`

```rust
pub fn clear(self: &mut Self);
```

Empties the buffer, keeping the block for reuse.

<a id="rustdoc-item-26"></a>

### `truncate`

```rust
pub fn truncate(self: &mut Self, new_len: usize);
```

Keeps only the first `new_len` elements.

<a id="rustdoc-item-27"></a>

### `reserve`

```rust
pub fn reserve(self: &mut Self, additional_element_count: usize);
```

Makes room for `additional_element_count` more elements.

#### Panics

Panics when the buffer has to grow and `T` is a zero-sized type, or
when the allocation request cannot be laid out.

<a id="rustdoc-item-28"></a>

### `element_byte_capacity`

```rust
pub(in dynamic_buffer) fn element_byte_capacity(element_count: usize) -> usize;
```

Returns the byte capacity of a block that holds `element_count`
elements.

<a id="rustdoc-item-29"></a>

### `grow_to`

```rust
pub(in dynamic_buffer) fn grow_to(self: &mut Self, wanted_element_count: usize);
```

Grows the buffer to hold at least `wanted_element_count` elements,
keeping the elements it already has.

Always allocates a fresh block and copies into it. That is correct
whether the current block is shared (the other handle keeps it) or not
(the old reference is released and the block is freed), and it never
moves a live block, which is what keeps the address-stability contract.

#### Panics

Panics when `T` is a zero-sized type, or when the allocation request
cannot be laid out.

<a id="rustdoc-item-31"></a>

### `swap_block`

```rust
pub(in dynamic_buffer) fn swap_block(self: &mut Self, fresh_block_pointer: *mut T);
```

Replaces this handle's block with `fresh_block_pointer`, copying the
live elements over and releasing the old block.

This is the one place the copy, release and swap sequence lives;
[`Self::grow_to`](#rustdoc-item-29) and [`Self::ensure_unique`](#rustdoc-item-30) differ only in how they
obtain the new block. `fresh_block_pointer` must hold the new block's
single reference and point at room for at least `self.element_count`
elements. The old block must still be described by
`self.element_capacity` elements of this type.

<a id="rustdoc-item-30"></a>

### `ensure_unique`

```rust
pub(in dynamic_buffer) fn ensure_unique(self: &mut Self);
```

Makes this handle the only user of its block, before writing through it.

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
- `DeserializeOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Default`
- `Clone`
- `Drop`
- `Send`
- `Sync`
- `Deref`
- `DerefMut`
- `Debug`
- `PartialEq`
- `Eq`
- `Serialize`
- `Deserialize<'de>`
