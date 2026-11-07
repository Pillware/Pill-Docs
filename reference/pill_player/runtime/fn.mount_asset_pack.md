<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-551"></a>

# Function `pill_player::runtime::mount_asset_pack`

```rust
pub fn mount_asset_pack<impl Into<std::borrow::Cow<'static, [u8]>>: Into<std::borrow::Cow<'static, [u8]>>>(project_name: &str, source: PackSource, bytes: impl Into<std::borrow::Cow<'static, [u8]>>) -> Result<pill_engine::AssetDatabase, pill_core::error::HostError>;
```

Source: `hosting\pill_player\src\runtime.rs:656`

Parses an asset pack and indexes every asset in it.

Returns the database to insert as a resource. It holds every packed asset
by guid and by path, so a reference can find and load one that is not
loaded yet. Parsing and mounting happen in one step because mounting
consumes the pack.

## Errors

Returns [`ConfigError::AssetPackInvalid`] when the bytes are not a pack.
