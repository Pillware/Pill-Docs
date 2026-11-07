<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1176"></a>

# Module `pill_master_renderer_data::assets::texture`

Visibility: `{'restricted': {'parent': 248, 'path': '::assets'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\texture.rs:1`

Texture assets: the texels the renderer uploads, and how they are read.

## Responsibilities

- Hold one texture's texels, their dimensions, and the name the asset is
  known by.
- Say how those texels are read ([`TextureType`](enum.TextureType.md#rustdoc-item-838)): as colour, as a normal
  map, or as an environment (an equirectangular panorama or a cubemap) for
  a skybox.
- Build a texture by decoding an image file ([`Texture::new`](struct.Texture.md#rustdoc-item-1174)), from an
  RGBA8 buffer ([`Texture::from_rgba`](struct.Texture.md#rustdoc-item-1177)), or from linear float texels
  ([`Texture::from_rgba_f32`](struct.Texture.md#rustdoc-item-1178)). A cubemap built this way is projected onto
  its six faces with the direction convention the skybox shaders sample
  by.
- Read the import settings from a metadata file ([`ImportedAsset`]):
  [`TextureImportSettings`](struct.TextureImportSettings.md#rustdoc-item-1220) in `<image>.meta` says how to read the texels.

## Design

A texture here is plain data with no GPU state: the renderer keeps the
texture, view and sampler beside it and rebuilds them when the asset's
version changes. [`TextureType`](enum.TextureType.md#rustdoc-item-838) travels with the texels because the bytes
alone do not say how to read them. The type decides the texel layout, the
GPU format the texture is uploaded as, and how a shader may sample it.

An environment texture holds high dynamic range values, so it is stored as
half floats: the widest format every backend can filter. A cubemap is
projected from its panorama once, at import, instead of on every frame.

## Module contents

### Structs
- [`Texture`](struct.Texture.md#rustdoc-item-2) — Decoded texels under a name, ready for the renderer to upload.
- [`TextureImportSettings`](struct.TextureImportSettings.md#rustdoc-item-1220) — How to read an image file as a texture: what the `.meta` file beside it

### Enums
- [`TextureType`](enum.TextureType.md#rustdoc-item-838) — How a texture's texels are meant to be read.

### Functions
- [`cube_face_direction`](fn.cube_face_direction.md#rustdoc-item-1270) — Returns the direction a texel of a cubemap face looks along.
- [`equirect_uv`](fn.equirect_uv.md#rustdoc-item-1114) — Returns the equirectangular uv that a direction samples, in `[0, 1]`.
- [`expected_byte_count`](fn.expected_byte_count.md#rustdoc-item-1269) — The number of bytes a texture of this type and size holds.
- [`load_shipped_texture`](fn.load_shipped_texture.md#rustdoc-item-1272) — Decodes a texture the module ships, read from `path` under its `res` root.
- [`project_equirect_to_cubemap`](fn.project_equirect_to_cubemap.md#rustdoc-item-1116) — Projects an equirectangular panorama onto the six faces of a cubemap.
- [`sample_bilinear`](fn.sample_bilinear.md#rustdoc-item-1271) — Reads a panorama at `(u, v)` with bilinear filtering.

### Constants
- [`DEFAULT_COLOR_TEXTURE`](constant.DEFAULT_COLOR_TEXTURE.md#rustdoc-item-1110) — The file the renderer's colour stand-in is read from. It holds one white
- [`DEFAULT_NORMAL_TEXTURE`](constant.DEFAULT_NORMAL_TEXTURE.md#rustdoc-item-1111) — The file the renderer's normal stand-in is read from. It holds one texel of
