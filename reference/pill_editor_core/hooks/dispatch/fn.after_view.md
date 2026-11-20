<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5172"></a>

# Function `pill_editor_core::hooks::dispatch::after_view`

```rust
pub(in hooks::dispatch) fn after_view<'a>(world: &pill_engine::World, command: &'a crate::editor_state::EditorCommand, inverse: Option<&crate::editor_state::EditorCommand>, cause: crate::hooks::events::FieldEditCause, phase: crate::hooks::events::FieldEditPhase, primary: bool) -> Option<crate::hooks::events::FieldEditView<'a>>;
```

Visibility: `{'restricted': {'parent': 5124, 'path': '::hooks::dispatch'}}` · Source: `editor\pill_editor_core\src\hooks\dispatch.rs:612`

The payload an after-callback sees: the applied value and the value the
command's inverse restores.
