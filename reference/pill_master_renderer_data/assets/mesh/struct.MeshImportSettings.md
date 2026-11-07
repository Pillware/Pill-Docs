<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-323"></a>

# Struct `pill_master_renderer_data::assets::mesh::MeshImportSettings`

```rust
pub struct MeshImportSettings;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\mesh.rs:301`

How to decode a model file into a mesh; a metadata file holds these
choices.

The defaults flip V and derive tangents. An import with no metadata file
uses them, and so does [`Mesh::from_obj_bytes`](struct.Mesh.md#rustdoc-item-318). Every field is part of the
metadata file format, and `#[serde(default)]` lets a file written before a
field existed still load.

## Fields

<a id="rustdoc-item-320"></a>

### `flip_v`

```rust
flip_v: bool
```

Whether the decode flips the V texture coordinate (`v` becomes
`1 - v`). A file counts V upward from the bottom edge; the renderer
samples from the top.

<a id="rustdoc-item-372"></a>

### `calculate_tangents`

```rust
calculate_tangents: bool
```

Whether the decode derives tangents and bitangents from the triangles
and their UVs. Normal mapping needs them; with this off they stay zero.

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
- `DeserializeOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Equivalent<K>`
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Serialize`
- `Deserialize<'de>`
- `Default`
