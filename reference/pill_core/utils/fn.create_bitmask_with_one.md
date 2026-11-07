<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2081"></a>

# Function `pill_core::utils::create_bitmask_with_one`

```rust
pub fn create_bitmask_with_one(index: u16) -> u16;
```

Source: `engine\pill_core\src\utils.rs:284`

Builds a `u16` bitmask with one bit set, at `index`.

Bits are numbered from the most significant bit (index 0) to the least
significant (index 15). An index outside `0..=15` gives a zero mask.

## Examples

```
use pill_core::utils::create_bitmask_with_one;

assert_eq!(create_bitmask_with_one(3), 0b0001_0000_0000_0000);
assert_eq!(create_bitmask_with_one(16), 0b0000_0000_0000_0000);
```
