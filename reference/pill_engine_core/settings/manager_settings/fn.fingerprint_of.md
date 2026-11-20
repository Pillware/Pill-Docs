<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10226"></a>

# Function `pill_engine_core::settings::manager_settings::fingerprint_of`

```rust
pub(in settings::manager_settings) fn fingerprint_of(bytes: &[u8]) -> u64;
```

Visibility: `{'restricted': {'parent': 5560, 'path': '::settings::manager_settings'}}` · Source: `engine\pill_engine_core\src\settings\manager_settings.rs:456`

A fingerprint of the bytes that reached a manager.

Only ever compared with another fingerprint from the same process, so it
needs no stability across runs.
