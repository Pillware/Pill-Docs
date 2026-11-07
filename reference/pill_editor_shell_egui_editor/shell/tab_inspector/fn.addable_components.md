<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-575"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_inspector::addable_components`

```rust
pub fn addable_components<'a>(snapshot: &'a EditorSnapshot, detail: &EntityDetail) -> Vec<&'a str>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_inspector.rs:300`

Returns the components the entity can still take: every registered one
that is marked addable and that the entity does not carry yet.
