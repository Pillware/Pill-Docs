<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4574"></a>

# Function `pill_editor_core::style::apply_theme`

```rust
pub fn apply_theme(context: &egui::Context, theme: &pill_ui_theme::Theme, layers: &[ThemeLayerInfo], generation: u64, fonts: &kit::style::ThemeFonts);
```

Source: `editor\pill_editor_core\src\style.rs:693`

Installs `theme` on `context` and records it as the editor's look.

The executable merges the layers and the shell installs the result, passing
the layers and the generation the theme came from. A context created later
(a pop-out window, the no-shell fallback) calls [`apply`](fn.apply.md#rustdoc-item-8457) to install the
recorded theme. The install goes through the UI kit with `append_fonts` as
its callback: a font a theme layer names leads each UI family, the editor's
own fonts follow it, and each icon family leads with its Phosphor face.
