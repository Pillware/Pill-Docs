<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7177"></a>

# Function `pill_editor_core::scripted::command`

```rust
pub(in scripted) fn command(cursor: &mut Cursor<'_>) -> Result<ScriptedCommand, ParseError>;
```

Visibility: `{'restricted': {'parent': 7129, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:1228`

`command <id>` - the recorded editor actions the suites drive.

## Errors

Returns an error when the id is missing, or names an action this editor
does not run; the reason quotes the id.
