<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2744"></a>

# Module `pill_engine_core::common_components`

Source: `engine\pill_engine_core\src\common_components.rs:1`

Components the engine defines because more than one consumer needs them.
Components the engine defines because more than one consumer needs them.

## Responsibilities

- Defines [`TransformComponent`](struct.TransformComponent.md#rustdoc-item-2689), an entity's placement in the scene.
  Rendering, physics, audio and gameplay code all read it.
- Declares its editor field layout and the one call that registers it
  ([`register_transform_component`](fn.register_transform_component.md#rustdoc-item-2743)), so a world that uses it shows the
  transform's fields in the inspector.

## Design

The transform belongs to the scene rather than to a renderer: where a thing
is has nothing to do with a GPU. Renderer-specific mesh, camera and material
contracts live in the rendering crates, and a renderer that wants a
component of its own - a pixel position for a sprite, say - defines it
beside the code that draws it.

The struct's bytes are a shared ABI. Another language binds the same row
through the name the component registers under and the `repr(C)` size it
checks. A `TypeId` would not work for this, because it is computed per
compilation unit; [`TransformComponent`](struct.TransformComponent.md#rustdoc-item-2689) declares a shared name instead, so
every binary that registers it resolves to the same column. The component is
declared by hand rather than with `#[derive(PillComponent)]`, whose
inventory entry would make every artifact that links the engine register the
component - and add it to that artifact's persistable-schema fingerprint -
whether the artifact used it or not.

## Module contents

### Structs
- [`TransformComponent`](struct.TransformComponent.md#rustdoc-item-2689) — Placement of an entity in the scene: position, orientation and scale.

### Functions
- [`register_transform_component`](fn.register_transform_component.md#rustdoc-item-2743) — Registers [`TransformComponent`] together with its editor field layout.
- [`rotation_or_identity`](fn.rotation_or_identity.md#rustdoc-item-2742) — Reads a [`TransformComponent::rotation`] value and returns it as a unit

### Constants
- [`ROTATION_IDENTITY_EPSILON`](constant.ROTATION_IDENTITY_EPSILON.md#rustdoc-item-2741) — Squared length at or below which a rotation quaternion is read as the
- [`TRANSFORM_SHARED_NAME`](constant.TRANSFORM_SHARED_NAME.md#rustdoc-item-2690) — The shared name [`TransformComponent`] registers under.
