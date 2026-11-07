<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4979"></a>

# Function `pill_editor_core::inspector::names_type`

```rust
pub(in inspector) fn names_type(row_type_name: &str, field_type_name: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 4798, 'path': '::inspector'}}` · Source: `editor\pill_editor_core\src\inspector.rs:1080`

Whether a row's type name is the one a field asked for, compared on the
last `::` segment.
