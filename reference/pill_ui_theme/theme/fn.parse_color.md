<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1321"></a>

# Function `pill_ui_theme::theme::parse_color`

```rust
pub(in theme) fn parse_color(item: &str, text: &str) -> Result<Rgba, ThemeError>;
```

Visibility: `{'restricted': {'parent': 1162, 'path': '::theme'}}` · Source: `ui\pill_ui_theme\src\theme.rs:803`

Parse a colour and name it on failure.

## Errors

[`ThemeError::Item`](enum.ThemeError.md#rustdoc-item-1288) naming `item` and the reason [`Rgba::parse`](struct.Rgba.md#rustdoc-item-792) refused
`text`.
