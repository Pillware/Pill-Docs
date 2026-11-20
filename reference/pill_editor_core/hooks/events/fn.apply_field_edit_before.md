<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5376"></a>

# Function `pill_editor_core::hooks::events::apply_field_edit_before`

```rust
pub(crate) unsafe fn apply_field_edit_before<T: ComponentFields>(callback: usize, context: &mut crate::hooks::HookContext<'_>, view: &FieldEditView<'_>) -> HookVerdict;
```

Visibility: `crate` · Source: `editor\pill_editor_core\src\hooks\events.rs:167`

Calls one typed before-callback with the view of the component it named.

## Safety

`callback` must be a `fn(&mut HookContext&lt;'_&gt;, &FieldEdit&lt;'_, T&gt;) ->
HookVerdict` stored by [`FieldEditBeforeHook::of::&lt;T&gt;`] with this same `T`.
The registry only ever pairs a callback with the applier it was stored with,
and drops both together when the registering module unloads.
