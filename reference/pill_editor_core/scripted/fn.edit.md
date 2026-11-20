<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9233"></a>

# Function `pill_editor_core::scripted::edit`

```rust
pub(in scripted) fn edit(cursor: &mut Cursor<'_>) -> Result<ScriptedCommand, ParseError>;
```

Visibility: `{'restricted': {'parent': 9187, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:1206`

`edit <target>` and its sub-grammars.

## Errors

Returns an error when the target is missing or unknown, when one of its
arguments is missing, and when an index is not a number.
