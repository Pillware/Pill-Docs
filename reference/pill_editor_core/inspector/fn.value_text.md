<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5072"></a>

# Function `pill_editor_core::inspector::value_text`

```rust
pub fn value_text(value: &pill_engine::FieldValue) -> String;
```

Source: `editor\pill_editor_core\src\inspector.rs:1564`

One field value in the text form the Inspector's widgets show and commit:
what a module panel displays and what it writes back through
`PanelCommand::SetField`.
