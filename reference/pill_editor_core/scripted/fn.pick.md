<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9232"></a>

# Function `pill_editor_core::scripted::pick`

```rust
pub(in scripted) fn pick(cursor: &mut Cursor<'_>) -> Result<ScriptedCommand, ParseError>;
```

Visibility: `{'restricted': {'parent': 9187, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:1169`

`pick entity <entity> <component> <field>`: arm an entity reference row, so
the next scene click names its reference.

## Errors

Returns an error when the target is neither `entity` nor `reference`, and
when one of the three arguments that follow is missing.
