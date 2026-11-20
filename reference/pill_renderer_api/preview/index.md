<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1608"></a>

# Module `pill_renderer_api::preview`

Source: `rendering\pill_renderer_api\src\preview.rs:1`

Asset previews: off-screen renders the editor asks a renderer for.
Asset previews: what an editor asks a renderer to draw
off-screen, and the pixels it gets back.

## Responsibilities

- Name the asset one preview draws ([`PreviewAsset`](enum.PreviewAsset.md#rustdoc-item-1534)) and the request that
  carries it ([`PreviewRequest`](struct.PreviewRequest.md#rustdoc-item-881), [`PreviewRequests`](struct.PreviewRequests.md#rustdoc-item-1609)).
- Carry the pixels back ([`PreviewImage`](struct.PreviewImage.md#rustdoc-item-206), [`PreviewResults`](struct.PreviewResults.md#rustdoc-item-204)).

## Design

A preview is asked for through the world, the same way a pick is: the
editor writes a request into [`PreviewRequests`](struct.PreviewRequests.md#rustdoc-item-1609), the renderer draws one
request per frame into its own small target and reads the pixels back over
the following frames, and the frontend moves them into
[`PreviewResults`](struct.PreviewResults.md#rustdoc-item-204). Nothing is written to disk, and the editor needs no GPU
device of its own.

## Module contents

### Structs
- [`PreviewImage`](struct.PreviewImage.md#rustdoc-item-206) — One preview that came back.
- [`PreviewRequest`](struct.PreviewRequest.md#rustdoc-item-881) — One preview asked for.
- [`PreviewRequests`](struct.PreviewRequests.md#rustdoc-item-1609) — The previews waiting for the renderer.
- [`PreviewResults`](struct.PreviewResults.md#rustdoc-item-204) — The previews the renderer finished.

### Enums
- [`PreviewAsset`](enum.PreviewAsset.md#rustdoc-item-1534) — The asset one preview draws.

### Functions
- [`ensure_preview_resources`](fn.ensure_preview_resources.md#rustdoc-item-1711) — Inserts [`PreviewRequests`] and [`PreviewResults`] unless the world already
