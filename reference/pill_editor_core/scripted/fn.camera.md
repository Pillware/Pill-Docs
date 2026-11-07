<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7171"></a>

# Function `pill_editor_core::scripted::camera`

```rust
pub(in scripted) fn camera(cursor: &mut Cursor<'_>) -> Result<ScriptedCommand, ParseError>;
```

Visibility: `{'restricted': {'parent': 7129, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:917`

`camera orbit|pan <dx> <dy>`, `camera dolly <dy>`, `camera zoom <lines>`.

## Errors

Returns an error when the gesture is missing or unknown, and when the
numbers it reads are missing or not numbers.
