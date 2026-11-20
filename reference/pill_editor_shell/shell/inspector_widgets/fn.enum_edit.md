<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-794"></a>

# Function `pill_editor_shell::shell::inspector_widgets::enum_edit`

```rust
pub fn enum_edit(ui: &mut egui::Ui, type_tag: &'static str, discriminant: i64) -> Option<FieldValue>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_widgets.rs:408`

Draws a declared enum's dropdown, listing the variants its field tag
names. Returns the picked variant's value when it differs from the current
one, and `None` when nothing changed or the tag cannot be read.

A row holding a discriminant no variant declares shows the number, so the
stored value stays visible until a variant is picked.
