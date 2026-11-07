<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4564"></a>

# Function `pill_editor_core::icons::rich`

```rust
pub fn rich(icon: Icon, label: &str) -> egui::RichText;
```

Source: `editor\pill_editor_core\src\icons.rs:481`

Combines `icon` and `label` into one text run. The icon's line art comes
from the duotone face and the letters from the UI fonts behind it.

The duotone face leads its family and maps no ASCII letter, so a label's
letters reach the UI font. Its line art at `codepoint + 1` has the same
outline as the regular face. The regular face cannot carry a mixed run
because it maps the lowercase letters with blank glyphs.
