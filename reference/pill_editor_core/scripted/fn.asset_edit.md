<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7176"></a>

# Function `pill_editor_core::scripted::asset_edit`

```rust
pub(in scripted) fn asset_edit(cursor: &mut Cursor<'_>) -> Result<AssetEdit, ParseError>;
```

Visibility: `{'restricted': {'parent': 7129, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:1188`

`edit asset create|delete|move|meta`.

## Errors

Returns an error when the action is missing or unknown, when its type,
folder, name or destination is missing, and when a quoted path is never
closed.
