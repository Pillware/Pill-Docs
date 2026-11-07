<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8457"></a>

# Function `pill_editor_core::style::apply`

```rust
pub fn apply(context: &egui::Context);
```

Source: `editor\pill_editor_core\src\style.rs:793`

Installs the theme the editor last resolved on `context`.

A pop-out window and the no-shell fallback call this, so every context
paints with the same tokens as the main one.
