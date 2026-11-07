<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1314"></a>

# Function `pill_ui_theme::theme::merge_shadow`

```rust
pub(in theme) fn merge_shadow(shadow: &mut Shadow, item: &str, overrides: &crate::overrides::ShadowOverride) -> Result<(), ThemeError>;
```

Visibility: `{'restricted': {'parent': 1149, 'path': '::theme'}}` · Source: `ui\pill_ui_theme\src\theme.rs:970`

Replace one shadow's present fields.

## Errors

[`ThemeError::Item`](enum.ThemeError.md#rustdoc-item-1275) naming an offset, blur or spread that does not fit its
integer field, or a colour that does not parse.
