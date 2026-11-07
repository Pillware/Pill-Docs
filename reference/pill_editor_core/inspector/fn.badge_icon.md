<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4627"></a>

# Function `pill_editor_core::inspector::badge_icon`

```rust
pub fn badge_icon(archetype_label: &str) -> Option<crate::icons::Icon>;
```

Source: `editor\pill_editor_core\src\inspector.rs:135`

The duotone icon a scene badge draws for an entity, or `None` when the
entity gets no mark.

A label that names a Camera component gets the camera icon, and one that
names a Light component gets the light icon. Any other label returns
`None`, which the badge draws as a plain circle. The label is the component
list the Hierarchy row already carries, so a new component type gains a
badge by naming it here and nowhere else.
