<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6923"></a>

# Function `pill_editor_core::inspector::hash_decorator`

```rust
pub(in inspector) fn hash_decorator(decorator: &pill_engine::component_registry::FieldDecorator, hasher: &mut std::collections::hash_map::DefaultHasher);
```

Visibility: `{'restricted': {'parent': 6761, 'path': '::inspector'}}` · Source: `editor\pill_editor_core\src\inspector.rs:744`

Hash what one decorator adds to the row model: its kind, plus the text or
value that the row draws or the widget takes from it.
