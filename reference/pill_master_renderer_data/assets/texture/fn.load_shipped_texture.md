<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1272"></a>

# Function `pill_master_renderer_data::assets::texture::load_shipped_texture`

```rust
pub fn load_shipped_texture(path: &str, texture_type: TextureType) -> pill_engine::AssetLoadResult<Texture>;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\texture.rs:484`

Decodes a texture the module ships, read from `path` under its `res` root.

The renderer's stand-in textures are content like the default material: a
file the module declares. They are read here because this crate's store is
the one that knows the module's roots. A caller that cannot use the result,
because the build has no such file or the image will not decode, falls back
to the texel it builds in code.

## Errors

Fails when the file does not resolve through the store, or when it does not
decode.
