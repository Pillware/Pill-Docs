<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-572"></a>

# Function `pill_development_host::build_runner::current_build_info`

```rust
pub(in build_runner) fn current_build_info() -> String;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:271`

The running host's toolchain version line followed by
[`host_build_identity`](fn.host_build_identity.md#rustdoc-item-568).

It is resolved once per process: running `rustc` for every stamp write would
cost more than the stamps save.
