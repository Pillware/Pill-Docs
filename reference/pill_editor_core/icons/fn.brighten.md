<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4573"></a>

# Function `pill_editor_core::icons::brighten`

```rust
pub(in icons) fn brighten(color: egui::Color32, amount: u8) -> egui::Color32;
```

Visibility: `{'restricted': {'parent': 4424, 'path': '::icons'}}` · Source: `editor\pill_editor_core\src\icons.rs:520`

Returns `color` with every RGB channel raised by `amount`, stopping at
255. The alpha channel is unchanged.
