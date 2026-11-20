<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5377"></a>

# Function `pill_editor_core::hooks::events::apply_field_edit_after`

```rust
pub(crate) unsafe fn apply_field_edit_after<T: ComponentFields>(callback: usize, context: &mut crate::hooks::HookContext<'_>, view: &FieldEditView<'_>);
```

Visibility: `crate` · Source: `editor\pill_editor_core\src\hooks\events.rs:203`

Calls one typed after-callback with the view of the component it named.

## Safety

`callback` must be a `fn(&mut HookContext<'_>, &FieldEdit<'_, T>)` stored by
[`FieldEditAfterHook::of::<T>`] with this same `T`, under the same rule as
[`apply_field_edit_before`](fn.apply_field_edit_before.md#rustdoc-item-5376).
