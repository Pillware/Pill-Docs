<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2069"></a>

# Function `pill_core::utils::get_type_name`

```rust
pub fn get_type_name<T>() -> String;
```

Source: `engine\pill_core\src\utils.rs:68`

Returns the short name of `T`: the part of its full type name after the
last `:`, so `std::vec::Vec<u8>` reads as `Vec<u8>`.

## Examples

```
use pill_core::utils::get_type_name;

assert_eq!(get_type_name::<Vec<u8>>(), "Vec<u8>");
assert_eq!(get_type_name::<u32>(), "u32");
```
