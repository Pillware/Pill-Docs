<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1315"></a>

# Function `pill_ui_theme::theme::merge_shape`

```rust
pub(in theme) fn merge_shape(shape: &mut Shape, overrides: &crate::overrides::ShapeOverrides) -> Result<(), ThemeError>;
```

Visibility: `{'restricted': {'parent': 1149, 'path': '::theme'}}` · Source: `ui\pill_ui_theme\src\theme.rs:1014`

Replace the shape items the document names.

## Errors

[`ThemeError::Item`](enum.ThemeError.md#rustdoc-item-1275) from a stroke, a shadow, or a width that is negative,
infinite or NaN.
