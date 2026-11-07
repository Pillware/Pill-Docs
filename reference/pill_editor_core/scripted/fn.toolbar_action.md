<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7178"></a>

# Function `pill_editor_core::scripted::toolbar_action`

```rust
pub(in scripted) fn toolbar_action(cursor: &mut Cursor<'_>) -> Result<ToolbarAction, ParseError>;
```

Visibility: `{'restricted': {'parent': 7129, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:1265`

`toolbar <action>`.

## Errors

Returns an error when the word is missing or is not one of the four
toolbar buttons.
