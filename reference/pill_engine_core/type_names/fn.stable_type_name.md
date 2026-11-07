<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3010"></a>

# Function `pill_engine_core::type_names::stable_type_name`

```rust
pub fn stable_type_name<T: ?Sized>() -> &'static str;
```

Source: `engine\pill_engine_core\src\type_names.rs:48`

[`std::any::type_name`] of `T`, with every `pill_engine_core::` path
written as `pill_engine::`.

Only a name that mentions the core's crate is rewritten. Any other name is
returned as it is, without an allocation.
