<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7221"></a>

# Function `pill_editor_core::scripted::point`

```rust
pub(in scripted) fn point(cursor: &mut Cursor<'_>, reason: &str) -> Result<(f32, f32), ParseError>;
```

Visibility: `{'restricted': {'parent': 7129, 'path': '::scripted'}}` · Source: `editor\pill_editor_core\src\scripted.rs:1689`

The next two words as a point or a delta.

## Errors

Returns `reason` when either of the two words is missing or is not a
number.
