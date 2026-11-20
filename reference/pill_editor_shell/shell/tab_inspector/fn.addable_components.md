<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-597"></a>

# Function `pill_editor_shell::shell::tab_inspector::addable_components`

```rust
pub fn addable_components<'a>(snapshot: &'a EditorSnapshot, detail: &EntityDetail) -> Vec<&'a str>;
```

Source: `editor\pill_editor_shell\src\shell\tab_inspector.rs:316`

Returns the components the entity can still take: every registered one
that is marked addable and that the entity does not carry yet.
