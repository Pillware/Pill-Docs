<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-847"></a>

# Constant `pill_development_host::config::DX_RUSTC_WRAPPER_ENVIRONMENT`

```rust
pub(in config) const DX_RUSTC_WRAPPER_ENVIRONMENT: &str = "DX_RUSTC";
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:200`

Environment variable that makes dx's own binary act as a rustc wrapper.

Without it, dx treats a `dx <rustc> <args>` invocation as a normal CLI call
and fails. With it, dx records the invocation in the directory the variable
names and then runs the real `rustc`. A host-spawned build that copies dx's
workspace wrapper must set both variables together.
