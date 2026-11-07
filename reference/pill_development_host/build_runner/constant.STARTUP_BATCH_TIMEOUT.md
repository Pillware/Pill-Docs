<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-563"></a>

# Constant `pill_development_host::build_runner::STARTUP_BATCH_TIMEOUT`

```rust
pub(in build_runner) const STARTUP_BATCH_TIMEOUT: std::time::Duration = _;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:136`

Longest time the startup batch may run.

The batch builds every module, the native project and the renderer with one
cargo command, and on a fresh checkout the private build tree is empty. That
is the one case where a single command may legitimately take minutes. The
per-module limit would kill it, and the modules it had not finished would
then be built again one by one.
