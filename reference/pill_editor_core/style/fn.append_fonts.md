<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8458"></a>

# Function `pill_editor_core::style::append_fonts`

```rust
pub(crate) fn append_fonts(fonts: &mut egui::FontDefinitions);
```

Visibility: `crate` · Source: `editor\pill_editor_core\src\style.rs:763`

Appends the editor's own families to `fonts`: Inter for the UI, JetBrains
Mono for code and numbers, then the icon families. Phosphor joins no UI
family, because its regular font also maps the lowercase Latin letters,
with empty glyphs.
