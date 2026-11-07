<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1323"></a>

# Function `pill_csharp_bridge::manifest::handle_tag`

```rust
pub(in manifest) fn handle_tag(asset_path: &str) -> &'static str;
```

Visibility: `{'restricted': {'parent': 1247, 'path': '::manifest'}}` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:225`

The engine tag a handle field is recorded under, such as
`struct:Handle<Mesh>`. It uses the last segment of the asset type's path,
as the derive writes it.
