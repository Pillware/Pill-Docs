<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4626"></a>

# Function `pill_editor_core::inspector::component_icon`

```rust
pub fn component_icon(type_name: &str) -> crate::icons::Icon;
```

Source: `editor\pill_editor_core\src\inspector.rs:96`

The duotone icon a component section's header draws, from its type name.

The engine's components carry no icon metadata, so the icon is chosen from
the words in the type's name. A transform gets the arrows that point in all
directions, a collider an outlined cube, a mesh a cube, a sprite or texture
an image, a material a sphere, a light a power switch, and a camera a
monitor. Audio gets a play mark, a script, behaviour or system a code mark,
and physics names outward arrows. Every other name gets the property
sliders.
