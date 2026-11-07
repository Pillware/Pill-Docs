<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4565"></a>

# Function `pill_editor_core::icons::append_font_definitions`

```rust
pub fn append_font_definitions(fonts: &mut egui::FontDefinitions);
```

Source: `editor\pill_editor_core\src\icons.rs:432`

Appends the Phosphor fonts to `fonts` as the [`FAMILY`](constant.FAMILY.md#rustdoc-item-4420) and
[`DUOTONE_FAMILY`](constant.DUOTONE_FAMILY.md#rustdoc-item-4421) families.

Each family lists its icon face first and then every font of the
proportional family already built, so a label beside an icon still draws.
The icon face goes first because the UI fonts also map the icon range, so
a UI font listed first would draw an icon as a letter. The regular face
cannot lead a mixed run because it maps the lowercase letters with blank
glyphs, so [`rich`](fn.rich.md#rustdoc-item-4564) takes its icon from the duotone face instead.
