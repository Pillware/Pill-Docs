<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1326"></a>

# Function `pill_ui_theme::theme::merge_stroke`

```rust
pub(in theme) fn merge_stroke(stroke: &mut Stroke, item: &str, overrides: &crate::overrides::StrokeOverride) -> Result<(), ThemeError>;
```

Visibility: `{'restricted': {'parent': 1162, 'path': '::theme'}}` · Source: `ui\pill_ui_theme\src\theme.rs:975`

Replace one stroke's present fields.

## Errors

[`ThemeError::Item`](enum.ThemeError.md#rustdoc-item-1288) naming a width or colour the document states
incorrectly.
