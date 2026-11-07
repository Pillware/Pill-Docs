<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1079"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_title`

```rust
pub fn tab_title(argument_0: &mut EditorTabViewer<'_>, argument_1: EditorTab) -> egui::WidgetText;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell.rs:923`

Returns one tab's dock title.

A module panel's title comes from the registry, so it changes when the
module unloads. A panel that went over its frame budget gets a `(slow)` mark
that no other tab carries.
