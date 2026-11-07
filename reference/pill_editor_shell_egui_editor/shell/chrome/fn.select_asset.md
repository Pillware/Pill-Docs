<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-440"></a>

# Function `pill_editor_shell_egui_editor::shell::chrome::select_asset`

```rust
pub fn select_asset(selection: &mut EditorSelection, path: &str) -> bool;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\chrome.rs:174`

Moves the shared selection onto the asset at `path` and logs the
`[editor] asset selected` token. Returns whether the selection moved.
