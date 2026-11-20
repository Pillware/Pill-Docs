<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1330"></a>

# Function `pill_ui_theme::theme::merge_widgets`

```rust
pub(in theme) fn merge_widgets(widgets: &mut WidgetStates, overrides: &crate::overrides::WidgetsOverrides) -> Result<(), ThemeError>;
```

Visibility: `{'restricted': {'parent': 1162, 'path': '::theme'}}` · Source: `ui\pill_ui_theme\src\theme.rs:1107`

Replace the fields the document names in each widget state.

## Errors

[`ThemeError::Item`](enum.ThemeError.md#rustdoc-item-1288) from the first state the document states incorrectly.
