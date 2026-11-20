<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1368"></a>

# Function `pill_engine_core::assets::standalone::read_standalone`

```rust
pub(in assets::standalone) fn read_standalone<T: StandaloneAsset>(name: &str) -> crate::asset::AssetLoadResult<(crate::asset::AssetGuid, <T as >::Document)>;
```

Visibility: `{'restricted': {'parent': 1369, 'path': '::assets::standalone'}}` · Source: `engine\pill_engine_core\src\assets\standalone.rs:288`

Returns the guid and document of the standalone file at the normalized
asset name `name`.
