<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-314"></a>

# Struct `pill_master_renderer_data::assets::mesh::Mesh`

```rust
pub struct Mesh;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\mesh.rs:77`

One drawable piece of geometry, holding interleaved vertices and a 32-bit
index list.

The renderer builds a GPU copy once and rebuilds it when the asset's
version moves. A game edits the mesh it holds and lets the renderer notice,
instead of touching buffers itself.

## Fields

<a id="rustdoc-item-310"></a>

### `name`

```rust
name: String
```

Name used in logs and error messages, and as the label of the GPU
buffers built from the mesh.

<a id="rustdoc-item-311"></a>

### `vertices`

```rust
vertices: Vec<MeshVertex>
```

Vertices, interleaved as [`MeshVertex`](struct.MeshVertex.md#rustdoc-item-254) lays them out.

<a id="rustdoc-item-313"></a>

### `indices`

```rust
indices: Vec<u32>
```

Indices into [`Self::vertices`](#rustdoc-item-311), one triangle per three entries.

## Associated functions and methods

<a id="rustdoc-item-315"></a>

### `from_data`

```rust
pub fn from_data<impl Into<String>: Into<String>>(name: impl Into<String>, vertices: Vec<MeshVertex>, indices: Vec<u32>) -> Self;
```

Builds a mesh from finished vertex and index buffers.

The buffers are stored as given. Nothing checks the indices against
the vertex list, so the caller supplies a pair that already agrees.

<a id="rustdoc-item-316"></a>

### `triangle`

```rust
pub fn triangle() -> Self;
```

The built-in stand-in mesh is one triangle in the XY plane, one unit
wide and one unit tall, facing +Z, with its UVs and tangent space
filled in.

A project with no geometry of its own can register this and draw it
through the same material and pipeline as any loaded mesh. That keeps
a fresh scene renderable before its assets exist.

<a id="rustdoc-item-318"></a>

### `from_obj_bytes`

```rust
pub fn from_obj_bytes<impl Into<String>: Into<String>>(name: impl Into<String>, bytes: &[u8]) -> Result<Self, AssetLoadError>;
```

Decodes a Wavefront OBJ buffer into an indexed, tangent-space mesh.

The C# bridge hands the host a model file's raw bytes and gets a mesh
back through this function, and the renderer's asset preview decodes a
file through it too.

#### Errors

Returns [`AssetLoadError::Decode`] when the buffer is not a readable
OBJ or holds no triangles. Both cases carry the mesh's name, so the
failure points at the asset rather than at the bytes.

<a id="rustdoc-item-321"></a>

### `from_obj_bytes_top_down`

```rust
pub fn from_obj_bytes_top_down<impl Into<String>: Into<String>>(name: impl Into<String>, bytes: &[u8]) -> Result<Self, AssetLoadError>;
```

Decodes a Wavefront OBJ buffer whose V coordinates are kept as
authored, top-down, with `0.0` at the image's top edge. The renderer
samples the same way.

[`Self::from_obj_bytes`](#rustdoc-item-318) decodes the other way, flipping V because an
OBJ file counts V up from the bottom edge. Use this function for a
file written for a top-left sampler, such as a port of an older demo.
Its texture coordinates then still point at the same parts of the
image. The metadata import makes the same choice through
[`MeshImportSettings::flip_v`](struct.MeshImportSettings.md#rustdoc-item-320).

#### Errors

Returns the same [`AssetLoadError::Decode`] cases as
[`Self::from_obj_bytes`](#rustdoc-item-318).

<a id="rustdoc-item-322"></a>

### `decode_obj`

```rust
pub(in assets::mesh) fn decode_obj(name: String, bytes: &[u8], settings: &MeshImportSettings) -> Result<Self, AssetLoadError>;
```

The OBJ decode behind [`Self::from_obj_bytes`](#rustdoc-item-318) and the metadata import.

`settings` says whether the decode flips V and whether it derives
tangent space.

#### Errors

Returns [`AssetLoadError::Decode`] when `tobj` cannot read the buffer
as an OBJ, and when the result holds no vertices or no indices.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `MirrorObject`
- `Asset`
- `MirrorValue`
- `MirrorReturn`
- `Clone`
- `Debug`
- `ImportedAsset`
- `TraitAccessible<dyn Asset>`
