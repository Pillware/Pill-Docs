<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8396"></a>

# Function `pill_engine_core::manager_settings::fingerprint_of`

```rust
pub(in manager_settings) fn fingerprint_of(bytes: &[u8]) -> u64;
```

Visibility: `{'restricted': {'parent': 8395, 'path': '::manager_settings'}}` · Source: `engine\pill_engine_core\src\manager_settings.rs:450`

A fingerprint of the bytes that reached a manager.

Only ever compared with another fingerprint from the same process, so it
needs no stability across runs.
