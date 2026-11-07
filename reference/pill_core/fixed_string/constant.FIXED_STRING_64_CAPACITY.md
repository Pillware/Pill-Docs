<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-796"></a>

# Constant `pill_core::fixed_string::FIXED_STRING_64_CAPACITY`

```rust
pub const FIXED_STRING_64_CAPACITY: usize = 64;
```

Source: `engine\pill_core\src\fixed_string.rs:46`

Capacity of a [`FixedString64`](struct.FixedString64.md#rustdoc-item-795), in bytes.

The capacity counts bytes, not characters. One multi-byte character uses
several of them. 64 is long enough for an asset name or a short path, and
it keeps the value cheap to copy.
