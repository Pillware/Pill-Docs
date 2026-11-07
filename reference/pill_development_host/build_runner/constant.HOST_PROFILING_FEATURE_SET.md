<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-570"></a>

# Constant `pill_development_host::build_runner::HOST_PROFILING_FEATURE_SET`

```rust
pub(in build_runner) const HOST_PROFILING_FEATURE_SET: &str = _;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:182`

The host's profiling level.

It is part of [`host_build_identity`](fn.host_build_identity.md#rustdoc-item-568) for the same reason as
[`HOST_MODULE_FEATURE_SET`](constant.HOST_MODULE_FEATURE_SET.md#rustdoc-item-567): it changes `pill_core`'s resolved features, and
every spawned build mirrors it through [`host_engine_features`](fn.host_engine_features.md#rustdoc-item-569).
