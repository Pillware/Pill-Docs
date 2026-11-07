<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1479"></a>

# Module `pill_master_renderer_data::config::skybox`

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\skybox\mod.rs:1`

The sky pass drawn where the lit pass wrote nothing.
The skybox: the two shaders a sky material draws through, and the pass that
draws the sky.

## Responsibilities

- Install the equirect and cubemap skybox shaders under fixed names and
  guids ([`install_shaders`]), so a `.material` file can name them.
- Build the pass that draws a sky material behind the scene
  ([`skybox_pass`]), and give the values a sky material's parameters start
  from ([`default_parameters`]).

## Design

A sky is a material, not a special asset: an ordinary `.material` file whose
shader is one of the two here and whose `sky` slot holds an
[`Equirect`](../../assets/texture/enum.TextureType.md#rustdoc-item-1115) or a
[`Cubemap`](../../assets/texture/enum.TextureType.md#rustdoc-item-1117) texture. The pass is an ordinary
[`RenderPass`] of kind [`PassKind::Skybox`] that names the material. It
draws one fullscreen triangle at the far plane and tests it against the
depth the geometry pass wrote, so the sky shows only where no mesh drew.

A sky material file names its shader by guid:
`5628c9e4d9278fec79998a7adab65bc3` ([`EQUIRECT_SHADER_GUID`]) or
`a6dfb611b11dfb57c5039dd8b6fc1a46` ([`CUBEMAP_SHADER_GUID`]). A material
file looks like this:

```json
"asset": {
  "shader": "5628c9e4d9278fec79998a7adab65bc3",
  "textures": { "sky": "<guid of an .hdr imported as Equirect>" },
  "parameters": {
    "skybox_tint": { "Color": [1.0, 1.0, 1.0] },
    "skybox_exposure": { "Scalar": 1.0 },
    "skybox_rotation": { "Scalar": 0.0 }
  }
}
```

The shaders use the camera's inverse view-projection to find the direction
each pixel looks along. The equirect shader then turns that direction into
a uv with the same rule as [`equirect_uv`](../../assets/texture/fn.equirect_uv.md#rustdoc-item-1114).

## Module contents

### Functions
- [`default_parameters`](fn.default_parameters.md#rustdoc-item-1544) — Return the neutral values of a sky material's parameters: white tint,
- [`install_shaders`](fn.install_shaders.md#rustdoc-item-1538) — Install the equirect and the cubemap skybox shaders, and return them in
- [`skybox_pass`](fn.skybox_pass.md#rustdoc-item-1545) — Build a skybox pass named `name` that draws `material` into `target`.

### Constants
- [`CUBEMAP_FRAGMENT`](constant.CUBEMAP_FRAGMENT.md#rustdoc-item-1536) — The fragment stage that samples a cubemap.
- [`CUBEMAP_SHADER_GUID`](constant.CUBEMAP_SHADER_GUID.md#rustdoc-item-1541) — The guid the cubemap skybox shader is stored under. See
- [`CUBEMAP_SHADER_PATH`](constant.CUBEMAP_SHADER_PATH.md#rustdoc-item-1540) — The asset name of the skybox shader that samples a cubemap. It is the path
- [`EQUIRECT_FRAGMENT`](constant.EQUIRECT_FRAGMENT.md#rustdoc-item-1535) — The fragment stage that samples an equirectangular panorama.
- [`EQUIRECT_SHADER_GUID`](constant.EQUIRECT_SHADER_GUID.md#rustdoc-item-1539) — The guid the equirect skybox shader is stored under, so a sky material file
- [`EQUIRECT_SHADER_PATH`](constant.EQUIRECT_SHADER_PATH.md#rustdoc-item-1537) — The asset name of the skybox shader that samples an equirectangular
- [`SHADER_SOURCES`](constant.SHADER_SOURCES.md#rustdoc-item-1543) — The shader assets [`install_shaders`] creates, with the cooked files each
- [`SKY_SLOT`](constant.SKY_SLOT.md#rustdoc-item-1542) — The texture slot both skybox shaders read the sky from.
- [`SKYBOX_VERTEX`](constant.SKYBOX_VERTEX.md#rustdoc-item-1534) — The skybox vertex stage: a fullscreen triangle at the far plane.
