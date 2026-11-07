<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2072"></a>

# Function `pill_core::utils::enum_variant_eq`

```rust
pub fn enum_variant_eq<T>(first: &T, second: &T) -> bool;
```

Source: `engine\pill_core\src\utils.rs:111`

Returns whether two values are the same enum variant.

It compares [`std::mem::discriminant`], so payload values are ignored.

## Examples

```
use pill_core::utils::enum_variant_eq;

assert!(enum_variant_eq(&Some(1), &Some(2)));
assert!(!enum_variant_eq(&Some(1), &None::<i32>));
```
