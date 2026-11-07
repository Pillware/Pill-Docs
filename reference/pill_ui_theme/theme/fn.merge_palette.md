<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1310"></a>

# Function `pill_ui_theme::theme::merge_palette`

```rust
pub(in theme) fn merge_palette(palette: &mut Palette, overrides: &crate::overrides::PaletteOverrides) -> Result<(), ThemeError>;
```

Visibility: `{'restricted': {'parent': 1149, 'path': '::theme'}}` · Source: `ui\pill_ui_theme\src\theme.rs:818`

Replace every colour role the document names.

## Errors

[`ThemeError::Item`](enum.ThemeError.md#rustdoc-item-1275) naming the first colour the document does not parse.
