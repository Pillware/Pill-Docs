<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3405"></a>

# Function `pill_engine_core::component_field::is_handle_tag`

```rust
pub(crate) fn is_handle_tag(type_tag: &str) -> bool;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\component_field\mod.rs:394`

Whether a type tag is a `Handle<T>` field's (`struct:Handle<Mesh>`, or
`struct:Handle` when the derive could not read the type argument).
