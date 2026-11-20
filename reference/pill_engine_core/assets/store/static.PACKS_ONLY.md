<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1964"></a>

# Static `pill_engine_core::assets::store::PACKS_ONLY`

```rust
pub(in assets::store) static PACKS_ONLY: std::sync::atomic::AtomicBool = _;
```

Visibility: `{'restricted': {'parent': 1779, 'path': '::assets::store'}}` · Source: `engine\pill_engine_core\src\assets\store.rs:622`

Whether the store reads only what its packs hold.

It is off until [`restrict_to_packs`](fn.restrict_to_packs.md#rustdoc-item-1962) turns it on. A development host runs
a project straight out of its source tree, and the fallbacks are how it
finds the files.
