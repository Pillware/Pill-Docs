<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-13"></a>

# Function `pill_test_editor::after_every_field_edit`

```rust
pub fn after_every_field_edit(context: &mut pill_editor_core::hooks::HookContext<'_>, edit: &pill_editor_core::hooks::FieldEdit<'_, pill_test::ModuleTest>);
```

Source: `extensions\pill_test\modules\editor\src\pill_test_editor.rs:132`

Logs the applied field edit, and queues the follow-up a magic value asks
for.
