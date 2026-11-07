<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2412"></a>

# Static `pill_engine_core::asset_store::PACKS_ONLY`

```rust
pub(in asset_store) static PACKS_ONLY: std::sync::atomic::AtomicBool = _;
```

Visibility: `{'restricted': {'parent': 2228, 'path': '::asset_store'}}` · Source: `engine\pill_engine_core\src\asset_store.rs:622`

Whether the store reads only what its packs hold.

It is off until [`restrict_to_packs`](fn.restrict_to_packs.md#rustdoc-item-2410) turns it on. A development host runs
a project straight out of its source tree, and the fallbacks are how it
finds the files.
