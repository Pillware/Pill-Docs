<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1369"></a>

# Module `pill_master_renderer_data::components::mesh_renderer`

Visibility: `{'restricted': {'parent': 1366, 'path': '::components'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\components\mesh_renderer.rs:1`

The mesh renderer component, and the builder that assembles one.

## Responsibilities

- Define [`MeshRendererComponent`](struct.MeshRendererComponent.md#rustdoc-item-1368), the pair of handles that makes an
  entity drawable, and [`MeshRendererComponentBuilder`](struct.MeshRendererComponentBuilder.md#rustdoc-item-1370), which fills in
  those two handles.

## Design

Shared and persistable: the managed mirror binds the same two handles, and
the reload migration keeps their values. The shared name is pinned rather
than derived from the module path; see [`crate::components`](../index.md#rustdoc-item-1366).

## Module contents

### Structs
- [`MeshRendererComponent`](struct.MeshRendererComponent.md#rustdoc-item-1368) — What an entity draws: a mesh paired with the material that shades it.
- [`MeshRendererComponentBuilder`](struct.MeshRendererComponentBuilder.md#rustdoc-item-1370) — Assembles a [`MeshRendererComponent`] one handle at a time.

### Functions
- [`__pill_register_MeshRendererComponent`](fn.__pill_register_MeshRendererComponent.md#rustdoc-item-1447) — Registers this component into the world; used by the artifact-wide
- [`register`](fn.register.md#rustdoc-item-1448) — Registers [`MeshRendererComponent`] with the world, field layout included.
