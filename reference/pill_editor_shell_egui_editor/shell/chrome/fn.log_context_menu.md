<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-446"></a>

# Function `pill_editor_shell_egui_editor::shell::chrome::log_context_menu`

```rust
pub fn log_context_menu(area: &str);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\chrome.rs:227`

Logs a context menu opening as `[editor] context menu`, with `area` set to
the name given, so a suite can tell which menu a right-click opened.

Public because the dock's tab bar logs through it directly: the dock
reports a tab right-click from a hook that carries no [`context_menu`](fn.context_menu.md#rustdoc-item-445)
response.
