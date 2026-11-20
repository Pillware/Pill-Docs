<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-997"></a>

# Function `pill_engine_core::reflection::type_names::stable_type_name`

```rust
pub fn stable_type_name<T: ?Sized>() -> &'static str;
```

Source: `engine\pill_engine_core\src\reflection\type_names.rs:63`

[`std::any::type_name`] of `T` in the stored form: every path in it written
as its crate and its last segment, and the engine core's crate written as
`pill_engine`.

A name that is already in that form is returned as it is, without an
allocation.
