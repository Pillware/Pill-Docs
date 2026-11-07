<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-592"></a>

# Module `pill_master_renderer::preview`

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\preview.rs:1`

The asset preview path: one small off-screen render, read back as pixels.
Asset previews: one small off-screen render, read back as pixels.

## Responsibilities

- Render one requested asset into a 128x128 RGBA8 target and copy it to a
  readback buffer ([`PreviewRenderer::record`],
  [`PreviewRenderer::record_mesh`]). At most one request is drawn per
  frame.
- Map that buffer after the frame that wrote it was submitted
  ([`PreviewRenderer::after_submit`]). Hand the pixels back once the GPU
  has finished ([`PreviewRenderer::collect`]).
- Decode and upload a texture file the first time a preview names it, and
  again when the file changes ([`PreviewRenderer::texture`]). Mesh files
  work the same way ([`PreviewRenderer::mesh`]).

## Design

A texture or material preview is one fullscreen triangle. The fragment
shader samples the asset's texture, or shades a sphere in a material's
colour, so these previews need no vertex buffer, camera or depth target.
A mesh preview uses a second pipeline that draws the decoded triangle list
through a camera fitted to the mesh's bounds. It has a depth target because
a solid seen from a three-quarter angle hides part of itself.

The target and both pipelines are built once and reused. The readback is a
mapped buffer polled without waiting, the same shape the pick buffer uses.
Nothing is written to disk: the pixels reach the editor as data.

## Module contents

### Structs
- [`BudgetedCache`](struct.BudgetedCache.md#rustdoc-item-774) — A cache of GPU data by file path, limited by bytes rather than by a count.
- [`MeshParameters`](struct.MeshParameters.md#rustdoc-item-682) — The uniform a mesh preview writes. It carries the camera framing and the
- [`MeshSource`](struct.MeshSource.md#rustdoc-item-725) — One decoded mesh on the GPU, with the transform that frames it.
- [`PreviewParameters`](struct.PreviewParameters.md#rustdoc-item-641) — The uniform a texture or material preview writes.
- [`PreviewRenderer`](struct.PreviewRenderer.md#rustdoc-item-780) — The GPU state one preview at a time needs: a 128x128 target, the two

### Enums
- [`PreviewMode`](enum.PreviewMode.md#rustdoc-item-599) — What the fragment shader draws, as the mode the parameters carry.

### Functions
- [`mesh_framing_transform`](fn.mesh_framing_transform.md#rustdoc-item-818) — Builds the transform a mesh preview draws through.

### Constants
- [`MESH_ATTRIBUTES`](constant.MESH_ATTRIBUTES.md#rustdoc-item-595) — The mesh vertex attributes the mesh pipeline reads: position and normal,
- [`MESH_BUDGET_BYTES`](constant.MESH_BUDGET_BYTES.md#rustdoc-item-594) — How many GPU bytes the decoded mesh files may hold.
- [`PREVIEW_BYTES`](constant.PREVIEW_BYTES.md#rustdoc-item-591) — Bytes one preview's pixels take: RGBA8, tightly packed.
- [`PREVIEW_SIZE`](constant.PREVIEW_SIZE.md#rustdoc-item-590) — Edge length of one preview, in texels.
- [`TEXTURE_BUDGET_BYTES`](constant.TEXTURE_BUDGET_BYTES.md#rustdoc-item-593) — How many GPU bytes the decoded texture files may hold.
