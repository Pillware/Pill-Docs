<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2056"></a>

# Module `pill_master_renderer::rendering_resources_manager`

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\rendering_resources_manager.rs:1`

The GPU objects that mirror the asset store, refreshed one asset type at a
time.
The GPU objects behind the asset store, kept up to date with it one asset
type at a time.

## Responsibilities

- Hold one GPU object per live asset - shader, texture, mesh, material - and
  the content version it was built from.
- Bring those objects up to date when the store's revision moves, and only
  the ones that moved: an edited texture is uploaded again while its
  neighbours keep the objects they already have, and a removed asset frees
  its slot.
- Own the resource epoch, the counter that increases whenever a shader or
  texture object changes. The chain reads it to learn that its bind groups
  are out of date.
- Resolve a frame's instances to the GPU handles the draw path needs, and
  hold the default shader and material that an asset naming none falls back
  to.

## Design

This mirrors the store rather than caching it: `AssetManager` looks assets
up by handle, while this keys its GPU objects by asset key. A key alone does
not say whether the asset behind it is still live, so every sync walks the
store's column for its own asset type.

A failure is per asset and never fatal: a texture that will not upload, a
shader that will not compile or a material whose pipeline will not build is
named in the log and skipped. Its version is left unrecorded, so the next
store revision tries it again.

## Module contents

### Structs
- [`GpuColumn`](struct.GpuColumn.md#rustdoc-item-504) — One asset type's GPU objects, keyed by asset key.
- [`RenderingResourcesManager`](struct.RenderingResourcesManager.md#rustdoc-item-1855) — The GPU objects behind the asset store, and what they were built from.

### Functions
- [`install_default_material`](fn.install_default_material.md#rustdoc-item-2141) — Builds the built-in lit shader and a material from it, and returns both.
