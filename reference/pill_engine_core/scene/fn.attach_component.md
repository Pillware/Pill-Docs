<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7928"></a>

# Function `pill_engine_core::scene::attach_component`

```rust
pub(in scene) fn attach_component(engine: &mut crate::engine::Engine, entity: crate::entity::Entity, component_name: &str) -> Result<bool, AttachError>;
```

Visibility: `{'restricted': {'parent': 7769, 'path': '::scene'}}` · Source: `engine\pill_engine_core\src\scene.rs:550`

Attaches `component_name` to `entity` with a zero-filled image, and reports
whether the component was newly attached.

## Errors

[`AttachError::UnknownType`](enum.AttachError.md#rustdoc-item-7896) when the world has no component of that name,
or when two registrations claim it and there is no single one to attach.
[`AttachError::Failed`](enum.AttachError.md#rustdoc-item-7898) when the world knows the type but the image cannot
be built or the add command is refused, carrying that layer's own reason.
