<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-687"></a>

# Function `pill_editor_shell::shell::inspector_fields::remember_asset_row_text`

```rust
pub fn remember_asset_row_text(session: &mut InspectorSession, key: &str, text: &str) -> bool;
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:1018`

Records the text an asset row draws and answers whether it changed since
the last frame that drew the row.

The row logs its current asset on its first draw and on every change, so a
suite can wait for a pick to show up and for an undo to bring the previous
asset back.
