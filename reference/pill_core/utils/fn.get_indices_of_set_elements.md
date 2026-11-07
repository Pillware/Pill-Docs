<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2082"></a>

# Function `pill_core::utils::get_indices_of_set_elements`

```rust
pub fn get_indices_of_set_elements(bitmask: u16) -> Vec<usize>;
```

Source: `engine\pill_core\src\utils.rs:314`

Returns the index of every set bit in a `u16` bitmask, counted from the
most significant bit (index 0).

## Examples

```
use pill_core::utils::get_indices_of_set_elements;

assert_eq!(
    get_indices_of_set_elements(0b0001_0000_0100_0001),
    vec![3, 9, 15],
);
```
