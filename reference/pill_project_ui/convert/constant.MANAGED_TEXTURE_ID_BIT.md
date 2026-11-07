<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-0"></a>

# Constant `pill_project_ui::convert::MANAGED_TEXTURE_ID_BIT`

```rust
pub(in convert) const MANAGED_TEXTURE_ID_BIT: u64 = _;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::convert'}}` · Source: `ui\pill_project_ui\src\convert.rs:38`

The top bit of a `pill_ui_frame::TextureId`, which keeps egui's two
texture id spaces apart.

egui numbers managed textures and user textures in separate spaces, so
both start at 0. Managed ids carry this bit and user ids have it cleared,
so one number never names a texture of each kind.
