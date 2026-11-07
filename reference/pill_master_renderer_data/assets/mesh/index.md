<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-324"></a>

# Module `pill_master_renderer_data::assets::mesh`

Visibility: `{'restricted': {'parent': 248, 'path': '::assets'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\mesh.rs:1`

Mesh assets: the vertices and indices the renderer draws, and the decoders
that build them.

## Responsibilities

- Carry the geometry the renderer uploads: vertices interleaved in the
  order the pipeline's vertex step reads them, plus a 32-bit index list.
- Build a mesh three ways: from buffers the game already holds, from the
  built-in triangle used as a stand-in, and by decoding a Wavefront OBJ
  buffer. The decode flips V by default; the top-down decode keeps it as
  authored.
- Derive tangent space after an OBJ decode, when the import settings ask
  for it: the tangents and bitangents are accumulated from the mesh's
  triangles and their UVs, then normalized.
- Load through a metadata file ([`ImportedAsset`]): the
  [`MeshImportSettings`](struct.MeshImportSettings.md#rustdoc-item-323) in `<model>.obj.meta` hold the decode choices.

## Design

[`MeshVertex`](struct.MeshVertex.md#rustdoc-item-254) is `repr(C)` and `Pod`, so a mesh's vertices upload as a
plain byte slice, and that same field order is the attribute layout the
renderer declares to wgpu. A mesh is an asset ([`pill_engine::Asset`]), so
the renderer rebuilds its buffers when the asset's version moves, and a
game never touches renderer state mid frame.

## Module contents

### Structs
- [`Mesh`](struct.Mesh.md#rustdoc-item-314) — One drawable piece of geometry, holding interleaved vertices and a 32-bit
- [`MeshImportSettings`](struct.MeshImportSettings.md#rustdoc-item-323) — How to decode a model file into a mesh; a metadata file holds these
- [`MeshVertex`](struct.MeshVertex.md#rustdoc-item-254) — One vertex of a mesh, in the layout of the vertex buffer.

### Functions
- [`calculate_tangent_space`](fn.calculate_tangent_space.md#rustdoc-item-422) — Builds every vertex's tangent and bitangent from the mesh's triangles and
- [`normalize_or_fallback`](fn.normalize_or_fallback.md#rustdoc-item-423) — Returns the vector scaled to length 1, or `fallback_axis` when the vector
