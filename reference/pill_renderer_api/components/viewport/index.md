<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-345"></a>

# Module `pill_renderer_api::components::viewport`

Visibility: `{'restricted': {'parent': 300, 'path': '::components'}}` · Source: `rendering\pill_renderer_api\src\components\viewport.rs:1`

The rectangle of the target a frame draws into.

## Responsibilities

- Define [`RenderViewport`](struct.RenderViewport.md#rustdoc-item-187): the pixel area inside a surface that the
  renderer draws into when a frontend asks for only part of it.

## Design

It is neither a component nor an asset. It is a plain value that the
renderer stores, so it has no ECS derives and nothing registers it. It sits
in `components/` beside the camera, the contract's other scene type.

## Module contents

### Structs
- [`RenderViewport`](struct.RenderViewport.md#rustdoc-item-187) — A rectangle of the target that a frame draws into, in pixels.
