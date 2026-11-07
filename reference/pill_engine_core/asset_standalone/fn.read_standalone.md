<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2215"></a>

# Function `pill_engine_core::asset_standalone::read_standalone`

```rust
pub(in asset_standalone) fn read_standalone<T: StandaloneAsset>(name: &str) -> crate::asset::AssetLoadResult<(crate::asset::AssetGuid, <T as >::Document)>;
```

Visibility: `{'restricted': {'parent': 2216, 'path': '::asset_standalone'}}` · Source: `engine\pill_engine_core\src\asset_standalone.rs:287`

Returns the guid and document of the standalone file at the normalized
asset name `name`.
