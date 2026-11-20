<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1324"></a>

# Function `pill_ui_theme::theme::merge_text_styles`

```rust
pub(in theme) fn merge_text_styles(styles: &mut std::collections::BTreeMap<String, TextStyle>, overrides: &std::collections::BTreeMap<String, crate::overrides::TextStyleOverride>) -> Result<(), ThemeError>;
```

Visibility: `{'restricted': {'parent': 1162, 'path': '::theme'}}` · Source: `ui\pill_ui_theme\src\theme.rs:875`

Replace the named text styles the document names, adding new ones.

## Errors

[`ThemeError::Item`](enum.ThemeError.md#rustdoc-item-1288) naming a size that is not positive, or a family the
document does not accept.
