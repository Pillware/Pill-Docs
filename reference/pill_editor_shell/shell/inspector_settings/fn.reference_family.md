<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-892"></a>

# Function `pill_editor_shell::shell::inspector_settings::reference_family`

```rust
pub fn reference_family(field: &AssetReferenceField) -> Option<&str>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_settings.rs:931`

Returns the list family a reference field's key belongs to.

`passes[3]` is an entry of `passes`. A key without brackets is a plain
field, not a list entry, so it answers `None`.
