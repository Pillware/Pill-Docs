<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-586"></a>

# Function `pill_development_host::build_runner::host_posture_features`

```rust
pub(in build_runner) fn host_posture_features() -> Vec<&'static str>;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:582`

Returns the frontend features the running host was built with.

They pick the anchor's feature selection for a build that is anchored: an
editor host, or a host started by the dioxus CLI.
