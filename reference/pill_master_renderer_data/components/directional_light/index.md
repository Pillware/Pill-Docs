<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1363"></a>

# Module `pill_master_renderer_data::components::directional_light`

Visibility: `{'restricted': {'parent': 1366, 'path': '::components'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\components\directional_light.rs:1`

The directional light a scene declares.

## Responsibilities

- Define [`DirectionalLightComponent`](struct.DirectionalLightComponent.md#rustdoc-item-1314): the colour and strength of the
  scene's key light.

## Design

The component is shared and persistable, so a scene keeps it and the C#
side sees the same type. No shipped pass reads it - each pass writes its
own lights into its shaders - so the values are stored but change nothing
that is drawn. The shared name is written out in full rather than derived
from the module path; [`crate::components`](../index.md#rustdoc-item-1366) explains why.

## Module contents

### Structs
- [`DirectionalLightComponent`](struct.DirectionalLightComponent.md#rustdoc-item-1314) — A directional light, described by the colour it emits and its strength.

### Functions
- [`__pill_register_DirectionalLightComponent`](fn.__pill_register_DirectionalLightComponent.md#rustdoc-item-1361) — Registers this component into the world; used by the artifact-wide
- [`register`](fn.register.md#rustdoc-item-1365) — Registers [`DirectionalLightComponent`] with the world, together with its
