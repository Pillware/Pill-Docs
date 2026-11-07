<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-333"></a>

# Trait `pill_master_renderer::resources::renderer_mesh::Vertex`

```rust
pub trait Vertex { ... }
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_mesh.rs:51`

A type that can be uploaded to a vertex buffer, together with the layout
the render pipeline uses to read it.

[`RendererMesh`](struct.RendererMesh.md#rustdoc-item-2504) describes the buffer of a mesh's vertices and
[`Instance`](../../instance/struct.Instance.md#rustdoc-item-134) the buffer of its instances. A geometry pass
takes both layouts, and each shader location belongs to exactly one of
them.

## Required and provided items

<a id="rustdoc-item-2503"></a>

### `data_layout_descriptor`

```rust
fn data_layout_descriptor<'a>() -> wgpu::VertexBufferLayout<'a>;
```

Returns the buffer layout the render pipeline maps this type through.

The descriptor gives the stride between vertices and where each
attribute sits inside it. It has to match the bytes uploaded into the
buffer and the shader locations the vertex shader declares.
