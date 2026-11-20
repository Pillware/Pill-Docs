<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5170"></a>

# Function `pill_editor_core::hooks::dispatch::before_view`

```rust
pub(in hooks::dispatch) fn before_view<'a>(world: &pill_engine::World, command: &'a crate::editor_state::EditorCommand, cause: crate::hooks::events::FieldEditCause, phase: crate::hooks::events::FieldEditPhase, primary: bool) -> Option<crate::hooks::events::FieldEditView<'a>>;
```

Visibility: `{'restricted': {'parent': 5124, 'path': '::hooks::dispatch'}}` · Source: `editor\pill_editor_core\src\hooks\dispatch.rs:559`

The payload a before-callback sees, or `None` when the command's previous
value cannot be read.

A value edit (`SetField`, `SetArrayElement`) carries the proposed value, so
a callback can replace it. A reference edit (`SetFieldAsset`,
`SetFieldEntity`) is not offered to the before pass: its command holds a
reference, not a value, and resolving it would duplicate the applier's
asset loading. Reference edits reach the after-callbacks with the value the
world holds.
