<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7173"></a>

# Function `pill_editor_core::scripted::dialog`

```rust
pub(in scripted) fn dialog(cursor: &mut Cursor<'_>) -> Result<ScriptedCommand, ParseError>;
```

Visibility: `{'restricted': {'parent': 7129, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:1007`

`dialog set name <text>` and `dialog submit`.

## Errors

Returns an error when the action is neither `set name` nor `submit`, and
when the name text is missing.
