<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4960"></a>

# Function `pill_editor_core::inspector::hash_decorator`

```rust
pub(in inspector) fn hash_decorator(decorator: &pill_engine::component_registry::FieldDecorator, hasher: &mut std::collections::hash_map::DefaultHasher);
```

Visibility: `{'restricted': {'parent': 4798, 'path': '::inspector'}}` · Source: `editor\pill_editor_core\src\inspector.rs:740`

Hash what one decorator adds to the row model: its kind, plus the text or
value that the row draws or the widget takes from it.
