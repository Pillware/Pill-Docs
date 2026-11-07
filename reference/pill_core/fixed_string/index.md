<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-798"></a>

# Module `pill_core::fixed_string`

Source: `engine\pill_core\src\fixed_string.rs:1`

Inline, fixed-capacity strings for plain-data structs.
Inline, fixed-capacity strings for plain-data structs.

## Responsibilities

- Provide [`FixedString64`](struct.FixedString64.md#rustdoc-item-795): a UTF-8 string stored in the value itself,
  never on the heap.

## Design

The engine copies values between DLLs, so a value it moves across must be
plain data: `#[repr(C)]`, no pointers, no heap allocation. A `String`
fails that in two ways. Its buffer belongs to the allocator of the DLL
that created it, so after a hot reload one library can free memory another
allocated. And a struct holding a `String` has no fixed C layout, so it
cannot be read across the module boundary or mirrored into C#. Keeping the
bytes in the value makes it `Copy`, gives it a fixed layout, and lets an
archetype move it with a memcpy like a `u32` field. The price is the length
ceiling the type's name states.

[`FixedString64::new`](struct.FixedString64.md#rustdoc-item-802) truncates instead of failing, and it always cuts on
a character boundary. That is what lets [`FixedString64::as_str`](struct.FixedString64.md#rustdoc-item-803) return a
`&str` without a `Result`, and it also means a string written by a build
with a larger capacity still loads. Serde sees the string, not the backing
array: `serde` implements its traits only up to 32-element arrays, and a
quoted `"footstep"` is what a person can read in a snapshot.

```
use pill_core::FixedString64;

let name = FixedString64::new("footstep");
assert_eq!(name.as_str(), "footstep");
```

## Module contents

### Structs
- [`FixedString64`](struct.FixedString64.md#rustdoc-item-795) — A UTF-8 string of up to [`FIXED_STRING_64_CAPACITY`] bytes, stored inline.

### Constants
- [`FIXED_STRING_64_CAPACITY`](constant.FIXED_STRING_64_CAPACITY.md#rustdoc-item-796) — Capacity of a [`FixedString64`], in bytes.
