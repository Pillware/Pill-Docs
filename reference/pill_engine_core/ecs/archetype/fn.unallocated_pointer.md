<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2724"></a>

# Function `pill_engine_core::ecs::archetype::unallocated_pointer`

```rust
pub(in ecs::archetype) fn unallocated_pointer(align: usize) -> std::ptr::NonNull<u8>;
```

Visibility: `{'restricted': {'parent': 2144, 'path': '::ecs::archetype'}}` · Source: `engine\pill_engine_core\src\ecs\archetype.rs:2095`

A non-null, correctly aligned pointer for a column that owns no allocation.

`NonNull::dangling()` gives address 1, which is aligned for `u8` and for
nothing wider. A zero-sized column keeps this pointer for its whole life,
because it never allocates, and its rows are read and written through it.
Deriving the address from the element's alignment keeps those accesses
well-formed. It is the same trick `NonNull::<T>::dangling` plays, written
out for an alignment that is only known at run time.
