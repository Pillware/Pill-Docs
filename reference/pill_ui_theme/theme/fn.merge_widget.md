<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1316"></a>

# Function `pill_ui_theme::theme::merge_widget`

```rust
pub(in theme) fn merge_widget(widget: &mut WidgetStyle, item: &str, overrides: &crate::overrides::WidgetStyleOverride) -> Result<(), ThemeError>;
```

Visibility: `{'restricted': {'parent': 1149, 'path': '::theme'}}` · Source: `ui\pill_ui_theme\src\theme.rs:1051`

Replace one widget state's present fields.

## Errors

[`ThemeError::Item`](enum.ThemeError.md#rustdoc-item-1275) naming a colour, a stroke or an expansion the document
states incorrectly.
