<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-464"></a>

# Function `pill_editor_shell::shell::chrome::engine_badge`

```rust
pub fn engine_badge(ui: &mut egui::Ui);
```

Source: `editor\pill_editor_shell\src\shell\chrome.rs:340`

The badge a picker puts on a row whose asset is not one of the project's
own files: a store asset built in code (a chain's built-in pass, the
renderer's default material) or a file under a module root.

Public like every helper the shell re-exports, so a patch crate reaches it
through the package path.
