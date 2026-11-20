<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6942"></a>

# Function `pill_editor_core::inspector::names_type`

```rust
pub(in inspector) fn names_type(row_type_name: &str, field_type_name: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 6761, 'path': '::inspector'}}` · Source: `editor\pill_editor_core\src\inspector.rs:1087`

Whether a row's type name is the one a field asked for, compared on the
last `::` segment.
