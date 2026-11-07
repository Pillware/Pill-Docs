<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7219"></a>

# Function `pill_editor_core::scripted::tab`

```rust
pub(in scripted) fn tab(cursor: &mut Cursor<'_>, reason: &str) -> Result<crate::layout::EditorTab, ParseError>;
```

Visibility: `{'restricted': {'parent': 7129, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:1663`

The next word as a tab name.

## Errors

Returns `reason` when the next word is missing or is not a tab name.
