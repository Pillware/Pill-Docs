<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2455"></a>

# Module `pill_master_renderer::resources::renderer_mesh`

Visibility: `{'restricted': {'parent': 2227, 'path': '::resources'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_mesh.rs:1`

The GPU side of a mesh: the vertex and index buffers one uploaded mesh is
drawn from.

## Responsibilities

- State the vertex buffer layout contract each vertex type implements, so a
  pipeline can describe its buffers without touching the mesh data
  ([`Vertex`](trait.Vertex.md#rustdoc-item-333)).
- Upload a decoded [`Mesh`](crate::assets::Mesh) into the vertex and index
  buffers one draw needs, refusing a mesh that carries no geometry
  ([`RendererMesh`](struct.RendererMesh.md#rustdoc-item-2504)).

## Design

The layout descriptor is built from the fields of the interleaved
[`MeshVertex`](crate::assets::MeshVertex), not configured per mesh, so the
descriptor and the uploaded bytes cannot drift apart. A mesh pipeline pairs
it with the per-instance layout ([`Instance`](../../instance/struct.Instance.md#rustdoc-item-134)). The two
layouts share one set of shader locations: the mesh attributes take 0 and 4
through 7, the instance attributes take 1 through 3.

## Module contents

### Structs
- [`RendererMesh`](struct.RendererMesh.md#rustdoc-item-2504) — One mesh's GPU buffers: the vertex data and the index list that draws it.
- [`RendererMeshHandle`](struct.RendererMeshHandle.md#rustdoc-item-10) — A typed handle for the slots of the map it was issued by.

### Traits
- [`Vertex`](trait.Vertex.md#rustdoc-item-333) — A type that can be uploaded to a vertex buffer, together with the layout
