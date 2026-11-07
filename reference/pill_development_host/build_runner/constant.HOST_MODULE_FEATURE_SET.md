<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-567"></a>

# Constant `pill_development_host::build_runner::HOST_MODULE_FEATURE_SET`

```rust
pub(in build_runner) const HOST_MODULE_FEATURE_SET: &str = _;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:171`

The host's feature set, which module builds must reproduce.

When the host is rebuilt with a different feature set, every cached module
artifact becomes invalid. `development` is passed into every module and
project build, so it changes the engine each module links. `rendering` does
not change the module's own engine - the renderer lives outside
`pill_engine` - but it still belongs here: a windowed host loads the wgpu
renderer beside its engine dylibs, and a cached artifact is only trusted
for the posture it was built for.
