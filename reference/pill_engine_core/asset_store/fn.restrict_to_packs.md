<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2410"></a>

# Function `pill_engine_core::asset_store::restrict_to_packs`

```rust
pub fn restrict_to_packs();
```

Source: `engine\pill_engine_core\src\asset_store.rs:629`

Read only what the mounted packs hold, never a development fallback.

A shipped build calls this where it mounts the pack it was built with.
From then on, a pack miss is a missing asset, not a file the machine it
runs on happens to have at the same name.
