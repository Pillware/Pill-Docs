<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-569"></a>

# Function `pill_development_host::build_runner::host_engine_features`

```rust
pub(in build_runner) fn host_engine_features() -> Vec<&'static str>;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:243`

The engine features every host-spawned build must copy from the running
host.

`pill_core.dll` and `pill_engine_core.dll` load once per process, and their
exported names hash the features their dependency trees resolved. A module
or project compiled with a different engine feature set therefore imports
names the loaded copies do not export, and loading fails with
"The specified procedure could not be found" (os error 127). Every `cfg!`
name checked here is a declared `pill_development_host` feature, so each one
reports exactly the posture the running binary was built with.
