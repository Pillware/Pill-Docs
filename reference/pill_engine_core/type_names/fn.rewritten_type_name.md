<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8627"></a>

# Function `pill_engine_core::type_names::rewritten_type_name`

```rust
pub(in type_names) fn rewritten_type_name(type_name: &'static str) -> &'static str;
```

Visibility: `{'restricted': {'parent': 8625, 'path': '::type_names'}}` · Source: `engine\pill_engine_core\src\type_names.rs:60`

The rewritten form of a core type name, built once per distinct name.

The rewritten text is kept for the rest of the program's life, so it can be
returned as `&'static str`.
