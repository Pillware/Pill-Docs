<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9277"></a>

# Function `pill_editor_core::scripted::tab`

```rust
pub(in scripted) fn tab(cursor: &mut Cursor<'_>, reason: &str) -> Result<crate::layout::EditorTab, ParseError>;
```

Visibility: `{'restricted': {'parent': 9187, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:1807`

The next word as a tab name.

## Errors

Returns `reason` when the next word is missing or is not a tab name.
