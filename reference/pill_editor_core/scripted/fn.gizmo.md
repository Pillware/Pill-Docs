<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9228"></a>

# Function `pill_editor_core::scripted::gizmo`

```rust
pub(in scripted) fn gizmo(cursor: &mut Cursor<'_>) -> Result<ScriptedCommand, ParseError>;
```

Visibility: `{'restricted': {'parent': 9187, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:1006`

`gizmo drag|press|release|<tool>`.

## Errors

Returns an error when the action or the target is missing, and when the
target is not a tool, an axis or a plane. A drag also fails when its two
deltas are missing or not numbers.
