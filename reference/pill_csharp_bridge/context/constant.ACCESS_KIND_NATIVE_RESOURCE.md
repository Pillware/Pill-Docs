<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1026"></a>

# Constant `pill_csharp_bridge::context::ACCESS_KIND_NATIVE_RESOURCE`

```rust
pub(crate) const ACCESS_KIND_NATIVE_RESOURCE: u8 = 2;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\context.rs:52`

Marks an access entry that names a Rust-owned resource by its shared name
(`ResMut<AssetManager>`). Managed code never sees this resource's bytes.

This kind is separate from [`ACCESS_KIND_RESOURCE`](constant.ACCESS_KIND_RESOURCE.md#rustdoc-item-1025) because the two are
looked up in different tables: a managed resource through the manifest's
resource bindings, a native one straight to `ResourceId::Shared` of its
name.
