<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2073"></a>

# Function `pill_core::utils::get_enum_variant_type_name`

```rust
pub fn get_enum_variant_type_name<T: core::fmt::Debug>(value: &T) -> String;
```

Source: `engine\pill_core\src\utils.rs:132`

Returns the name of the enum variant `value` holds, read from its `Debug`
output.

Everything from the first `(` onward is dropped, which removes a tuple
variant's payload. When that output has no `(`, the whole output comes
back: that is the case for a struct, or for a struct-shaped variant.

`value` must implement `Debug`.

## Examples

```
use pill_core::utils::get_enum_variant_type_name;

assert_eq!(get_enum_variant_type_name(&Some(2.0)), "Some");
assert_eq!(get_enum_variant_type_name(&None::<f32>), "None");
```
