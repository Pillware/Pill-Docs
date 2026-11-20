<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-877"></a>

# Function `pill_editor_shell::shell::inspector_settings::list_entry_field`

```rust
pub fn list_entry_field(references: &[AssetReferenceField], family: &str, index: usize, entry: &JsonValue, target: &str) -> AssetReferenceField;
```

Source: `editor\pill_editor_shell\src\shell\inspector_settings.rs:277`

Returns the reference field one list entry draws.

That is the field the snapshot expanded for the entry's key. When the
document holds an entry the snapshot does not name, the field is built from
the entry itself, so the row still reads and writes.
