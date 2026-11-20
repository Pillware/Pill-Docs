<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8"></a>

# Function `pill_test_editor::before_every_field_edit`

```rust
pub fn before_every_field_edit(context: &mut pill_editor_core::hooks::HookContext<'_>, edit: &pill_editor_core::hooks::FieldEdit<'_, pill_test::ModuleTest>) -> pill_editor_core::hooks::HookVerdict;
```

Source: `extensions\pill_test\modules\editor\src\pill_test_editor.rs:92`

Reads the editor state and logs the field edit, replacing or refusing a
magic value.

## Errors

Never: the verdict is always built here. The signature is the one the
request constructor takes.
