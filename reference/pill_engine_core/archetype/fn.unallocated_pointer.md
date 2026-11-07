<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-706"></a>

# Function `pill_engine_core::archetype::unallocated_pointer`

```rust
pub(in archetype) fn unallocated_pointer(align: usize) -> std::ptr::NonNull<u8>;
```

Visibility: `{'restricted': {'parent': 110, 'path': '::archetype'}}` · Source: `engine\pill_engine_core\src\archetype.rs:2080`

A non-null, correctly aligned pointer for a column that owns no allocation.

`NonNull::dangling()` gives address 1, which is aligned for `u8` and for
nothing wider. A zero-sized column keeps this pointer for its whole life,
because it never allocates, and its rows are read and written through it.
Deriving the address from the element's alignment keeps those accesses
well-formed. It is the same trick `NonNull::<T>::dangling` plays, written
out for an alignment that is only known at run time.
