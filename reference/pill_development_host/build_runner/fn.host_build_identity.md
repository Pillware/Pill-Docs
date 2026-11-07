<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-568"></a>

# Function `pill_development_host::build_runner::host_build_identity`

```rust
pub(in build_runner) fn host_build_identity() -> String;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:215`

The host's build identity: feature set, cargo profile, target, and the
environment every spawned build runs with.

The profile and the target belong here for the same reason as the feature
set: both change the crate-metadata hash on both sides of the DLL boundary,
so an artifact built under one and loaded under the other cannot resolve its
exports. The environment decides whether module builds drop
`-C prefer-dynamic` and whether they mirror the dioxus CLI's
`RUSTC_WORKSPACE_WRAPPER`, and each of those changes every member crate's
metadata hash. Any mismatch shows up as `LoadLibrary` error 127, which names
no cause.
