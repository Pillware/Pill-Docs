<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4965"></a>

# Function `pill_editor_core::inspector::take_component_rows`

```rust
pub fn take_component_rows(session: &mut crate::session::InspectorSession, component: &crate::editor_state::ComponentView, selected_details: &[crate::editor_state::EntityDetail], primary: pill_engine::Entity) -> (Vec<CachedRow>, Vec<pill_engine::Entity>);
```

Source: `editor\pill_editor_core\src\inspector.rs:838`

Take one component's cached rows and write targets out of the session,
rebuilding whichever part moved.

Taking them out lets the caller draw while it still holds the same
`&mut InspectorSession` the model lives in, because the draw also borrows
the session for its pickers and rectangles. The caller hands both back with
[`store_component_rows`](fn.store_component_rows.md#rustdoc-item-4964) after the section's rows.
