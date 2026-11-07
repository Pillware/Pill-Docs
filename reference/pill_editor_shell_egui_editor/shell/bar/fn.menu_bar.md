<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-218"></a>

# Function `pill_editor_shell_egui_editor::shell::bar::menu_bar`

```rust
pub fn menu_bar(ui: &mut egui::Ui, session: &mut MenubarSession, mark: &egui::TextureHandle, viewer: &mut EditorTabViewer<'_>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\bar.rs:38`

Draws the menu bar above the dock: the pill mark, then Unity's six titles.

The bar is a top panel drawn before the dock, so the dock and every viewport
rectangle the frame reports start below it. Each title's rectangle is
logged once per placement, and an open menu's entries log theirs the same
way, so a suite can click a menu row without knowing the font or the theme
metrics.

Public because a hot patch of [`run_frame`](../fn.run_frame.md#rustdoc-item-217) calls it through the package
path, like every other function a patch can reach.
