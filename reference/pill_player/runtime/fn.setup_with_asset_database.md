<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-315"></a>

# Function `pill_player::runtime::setup_with_asset_database`

```rust
pub fn setup_with_asset_database(project: crate::StaticProject, database: Option<pill_engine::AssetDatabase>) -> Result<Runtime, pill_core::error::HostError>;
```

Source: `hosting\pill_player\src\runtime.rs:732`

Create the engine and initialize a statically linked project whose pack has
already been mounted.

`database` is the one [`mount_asset_pack`](fn.mount_asset_pack.md#rustdoc-item-551) returned, or `None` for a
project without assets. It is inserted before any module or project init
runs, which is why a fetched pack has to arrive here rather than be added
afterwards.

## Errors

Returns a typed [`HostError`] when an extension's or the project's entry
point reports a non-zero initialization status, or an external backend
fails to start. There is no previous generation to fall back to on this
path, so the first failure is fatal.
