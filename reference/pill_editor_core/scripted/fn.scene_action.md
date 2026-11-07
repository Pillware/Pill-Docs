<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7168"></a>

# Function `pill_editor_core::scripted::scene_action`

```rust
pub(in scripted) fn scene_action(cursor: &mut Cursor<'_>) -> Result<ScriptedCommand, ParseError>;
```

Visibility: `{'restricted': {'parent': 7129, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:835`

`scene new|open <path>|save [<path>]`.

## Errors

Returns an error when the action is missing or unknown, and when `open`
names no path.
