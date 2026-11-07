<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4985"></a>

# Function `pill_editor_core::inspector::field_coalesce_key`

```rust
pub fn field_coalesce_key(entity: pill_engine::Entity, component: &str, field: &str) -> String;
```

Source: `editor\pill_editor_core\src\inspector.rs:1164`

The continuous-edit key one inspector widget's commits share, so a drag
or a typing run merges into one undo step.
