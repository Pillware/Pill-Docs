<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1309"></a>

# Function `pill_ui_theme::theme::check_number`

```rust
pub(in theme) fn check_number(item: &str, value: f32) -> Result<f32, ThemeError>;
```

Visibility: `{'restricted': {'parent': 1149, 'path': '::theme'}}` · Source: `ui\pill_ui_theme\src\theme.rs:802`

Returns `value` when it is finite and non-negative, or an error naming
`item` otherwise.

## Errors

[`ThemeError::Item`](enum.ThemeError.md#rustdoc-item-1275) naming `item` when `value` is negative, infinite or
NaN.
