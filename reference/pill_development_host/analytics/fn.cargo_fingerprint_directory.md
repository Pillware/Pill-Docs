<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6"></a>

# Function `pill_development_host::analytics::cargo_fingerprint_directory`

```rust
pub(in analytics) fn cargo_fingerprint_directory() -> String;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::analytics'}}` · Source: `hosting\pill_development_host\src\analytics.rs:88`

The folder, relative to the workspace root, where cargo writes each
compiled crate's fingerprint JSON.

It sits in the same private build tree as [`cargo_timings_directory`](fn.cargo_timings_directory.md#rustdoc-item-4).
Every build the host starts sets `CARGO_TARGET_DIR` to
[`crate::config::MODULE_BUILD_TARGET_DIRECTORY`](../config/constant.MODULE_BUILD_TARGET_DIRECTORY.md#rustdoc-item-3), so the fingerprints
under it belong to the builds this report describes.
