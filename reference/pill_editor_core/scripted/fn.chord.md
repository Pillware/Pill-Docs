<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7179"></a>

# Function `pill_editor_core::scripted::chord`

```rust
pub(in scripted) fn chord(cursor: &mut Cursor<'_>) -> Result<KeyChord, ParseError>;
```

Visibility: `{'restricted': {'parent': 7129, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:1283`

`key <chord>`, the modifiers joined to the key with `+`.

## Errors

Returns an error when the chord is missing, when a part before the key is
not a modifier, and when the last part is not a key name. A chord that
ends in `+` is malformed rather than unknown, and gets the general reason.
