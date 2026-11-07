<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4991"></a>

# Function `pill_editor_core::inspector::resource_coalesce_key`

```rust
pub fn resource_coalesce_key(resource: &str, field: &str) -> String;
```

Source: `editor\pill_editor_core\src\inspector.rs:1265`

The coalesce key a resource field's writes share, so a drag on one row is
one undo step.
