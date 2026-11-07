<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2070"></a>

# Function `pill_core::utils::get_value_type_name`

```rust
pub fn get_value_type_name<T>(_: &T) -> String;
```

Source: `engine\pill_core\src\utils.rs:90`

Returns the short name of the type of `value`: the part of its full type
name after the last `:`.

Only the type of `value` is used; the value itself is not read.

## Examples

```
use pill_core::utils::get_value_type_name;

let value = 42u32;
assert_eq!(get_value_type_name(&value), "u32");
```
