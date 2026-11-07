<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-561"></a>

# Constant `pill_development_host::build_runner::BUILD_TIMEOUT`

```rust
pub(in build_runner) const BUILD_TIMEOUT: std::time::Duration = _;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:127`

Longest time one module's build command may run.

A module builds incrementally in the private build tree, so this is enough
for one crate and the dependencies that changed.
