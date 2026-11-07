<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4982"></a>

# Function `pill_editor_core::inspector::parse_entity_reference`

```rust
pub fn parse_entity_reference(text: &str) -> Result<Option<pill_engine::Entity>, String>;
```

Source: `editor\pill_editor_core\src\inspector.rs:1108`

The entity a scripted reference names: a Hierarchy label (`3v0`), a bare
slot id (`3`, read as generation 0), or `None` for the word that clears the
reference.

## Errors

A message naming the text when it is not an entity label.
