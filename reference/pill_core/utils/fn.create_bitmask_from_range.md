<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2076"></a>

# Function `pill_core::utils::create_bitmask_from_range`

```rust
pub fn create_bitmask_from_range<T>(mask_range: &core::ops::Range<T>) -> T where T: Copy + Default + Binary + From<u8> + Ord + Shl<Output = _> + Sub<Output = _> + Add<Output = _> + Not<Output = _>;
```

Source: `engine\pill_core\src\utils.rs:233`

Builds a bitmask as wide as `T` with one contiguous run of set bits.

Bits are numbered from the most significant bit (MSB, index 0) to the
least significant. `mask_range` gives the run to set, and both ends count:
`0..4` sets five bits, at indexes 0 to 4.

## Examples

```
use pill_core::utils::create_bitmask_from_range;

let mask = create_bitmask_from_range::<u16>(&(0..4));
assert_eq!(mask, 0b1111_1000_0000_0000);
```

## Panics

Panics when `mask_range.end` is at or past the bit width of `T`, or when
`mask_range.start` is greater than `mask_range.end`. A reversed range has
no run to set, and its length would underflow.
