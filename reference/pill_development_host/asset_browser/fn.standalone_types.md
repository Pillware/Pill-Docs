<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4553"></a>

# Function `pill_development_host::asset_browser::standalone_types`

```rust
pub fn standalone_types(world: &pill_engine::World) -> Vec<StandaloneType>;
```

Source: `hosting\pill_development_host\src\asset_browser.rs:408`

Returns the live standalone types, sorted by display name: the list a
"create asset" dropdown offers.

Sourced types (textures, meshes, sounds) are not listed, because they come
from adding a source file to `res`.
