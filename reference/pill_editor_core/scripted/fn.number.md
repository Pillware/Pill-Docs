<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9278"></a>

# Function `pill_editor_core::scripted::number`

```rust
pub(in scripted) fn number<T: std::str::FromStr>(cursor: &mut Cursor<'_>, reason: &str) -> Result<T, ParseError>;
```

Visibility: `{'restricted': {'parent': 9187, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:1820`

The next word as a number.

## Errors

Returns `reason` when the next word is missing or does not parse as the
requested number type.
