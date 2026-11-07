<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7172"></a>

# Function `pill_editor_core::scripted::dump`

```rust
pub(in scripted) fn dump(cursor: &mut Cursor<'_>) -> Result<Dump, ParseError>;
```

Visibility: `{'restricted': {'parent': 7129, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:957`

`dump <target>` and `dump field <entity> <component> <field>`.

## Errors

Returns an error when the target is missing or unknown, and one naming
the missing arguments when a `field` line is short of them.
