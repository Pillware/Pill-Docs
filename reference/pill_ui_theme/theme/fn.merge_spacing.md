<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1312"></a>

# Function `pill_ui_theme::theme::merge_spacing`

```rust
pub(in theme) fn merge_spacing(spacing: &mut Spacing, overrides: &crate::overrides::SpacingOverrides) -> Result<(), ThemeError>;
```

Visibility: `{'restricted': {'parent': 1149, 'path': '::theme'}}` · Source: `ui\pill_ui_theme\src\theme.rs:893`

Replace the metrics the document names.

## Errors

[`ThemeError::Item`](enum.ThemeError.md#rustdoc-item-1275) naming the first number that is negative, infinite or
NaN.
