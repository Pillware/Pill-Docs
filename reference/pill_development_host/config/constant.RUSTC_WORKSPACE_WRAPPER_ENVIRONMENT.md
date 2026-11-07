<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-846"></a>

# Constant `pill_development_host::config::RUSTC_WORKSPACE_WRAPPER_ENVIRONMENT`

```rust
pub(in config) const RUSTC_WORKSPACE_WRAPPER_ENVIRONMENT: &str = "RUSTC_WORKSPACE_WRAPPER";
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:192`

Cargo's workspace-wrapper environment variable.

Cargo wraps only workspace member crates through this executable and folds
the executable's path into their `-C metadata` hash, which is how dx's
build diverges from a plain cargo build. The name is kept in this one
constant so it and the dx-specific `DX_RUSTC` sibling stay together.
