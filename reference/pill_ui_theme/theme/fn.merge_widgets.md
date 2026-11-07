<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1317"></a>

# Function `pill_ui_theme::theme::merge_widgets`

```rust
pub(in theme) fn merge_widgets(widgets: &mut WidgetStates, overrides: &crate::overrides::WidgetsOverrides) -> Result<(), ThemeError>;
```

Visibility: `{'restricted': {'parent': 1149, 'path': '::theme'}}` · Source: `ui\pill_ui_theme\src\theme.rs:1082`

Replace the fields the document names in each widget state.

## Errors

[`ThemeError::Item`](enum.ThemeError.md#rustdoc-item-1275) from the first state the document states incorrectly.
