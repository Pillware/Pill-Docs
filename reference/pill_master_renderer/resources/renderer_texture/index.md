<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2764"></a>

# Module `pill_master_renderer::resources::renderer_texture`

Visibility: `{'restricted': {'parent': 2227, 'path': '::resources'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_texture.rs:1`

The GPU textures the renderer samples and renders into.

## Responsibilities

- Own the texture, view, and sampler triple behind every texture handle,
  so a resource that exists is complete ([`RendererTexture`](struct.RendererTexture.md#rustdoc-item-500)).
- Turn decoded texels into a texture under the asset's name
  ([`RendererTexture::new_texture`](struct.RendererTexture.md#rustdoc-item-2596)): RGBA8 colour and normal maps, a
  half-float equirectangular panorama, or a six-face half-float cubemap.
- Create offscreen colour targets at a caller-chosen format, and the
  surface-sized depth buffer ([`RendererTexture::new_render_target`](struct.RendererTexture.md#rustdoc-item-2817),
  [`RendererTexture::new_depth_texture`](struct.RendererTexture.md#rustdoc-item-2818)).

## Design

One type serves uploaded assets, offscreen passes, and depth because every
consumer needs the same three handles. The three constructors differ only
in how they describe the texture and its sampler; uploading an asset's
texels is the one extra step. The calls wgpu validates - creating the
texture, the upload and creating the sampler - go through
`capturing_validation`, so a refusal it can wait for comes back as an error
the caller reports against this resource, instead of a log line from the
device's uncaptured-error handler.

## Module contents

### Structs
- [`RendererTexture`](struct.RendererTexture.md#rustdoc-item-500) — A texture together with the view and sampler that make it usable.
- [`RendererTextureHandle`](struct.RendererTextureHandle.md#rustdoc-item-506) — A typed handle for the slots of the map it was issued by.

### Functions
- [`texture_failure`](fn.texture_failure.md#rustdoc-item-2847) — Turns a captured wgpu failure into an error naming the texture and the
