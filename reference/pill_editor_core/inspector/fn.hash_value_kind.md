<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4962"></a>

# Function `pill_editor_core::inspector::hash_value_kind`

```rust
pub(in inspector) fn hash_value_kind(value: &pill_engine::FieldValue, hasher: &mut std::collections::hash_map::DefaultHasher);
```

Visibility: `{'restricted': {'parent': 4798, 'path': '::inspector'}}` · Source: `editor\pill_editor_core\src\inspector.rs:779`

Hash the parts of a value the row model reads: its kind, an array's element
count and element kinds, a list's element count, an asset's type.
