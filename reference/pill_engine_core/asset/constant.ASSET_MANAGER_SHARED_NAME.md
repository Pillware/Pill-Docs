<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1161"></a>

# Constant `pill_engine_core::asset::ASSET_MANAGER_SHARED_NAME`

```rust
pub const ASSET_MANAGER_SHARED_NAME: &str = "pill_engine::asset::AssetManager";
```

Source: `engine\pill_engine_core\src\asset.rs:678`

The shared name that the store's C# mirror registers the manager under
(`[NativeResource("pill_engine::asset::AssetManager")]`).

The name is shared instead of being keyed by `TypeId`, so both languages end
up with the same identity: the managed mirror hashes the same string, and
every artifact that links the engine agrees on the identity without comparing
`TypeId`s.
