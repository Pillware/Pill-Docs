<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1250"></a>

# Function `pill_development_host::config::profile_name_for_directory`

```rust
pub(in config) fn profile_name_for_directory(directory: &str) -> &str;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1340`

Map a cargo profile *directory* to the profile *name* that produces it.

Split out from [`host_profile_name`](fn.host_profile_name.md#rustdoc-item-1248) so the mapping is testable without
rebuilding the host under every profile.
