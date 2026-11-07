<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-813"></a>

# Function `pill_development_host::build_runner::take_batch_validation`

```rust
pub(in build_runner) fn take_batch_validation(module_name: &str, watch_directory: &std::path::Path) -> bool;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:2130`

Checks whether the startup batch already validated `module_name`'s artifact.

Consumed per module: the token belongs to the startup load, so a reload of
the same module builds on its own. Any file under `watch_directory` newer
than the batch also invalidates it. The batch validated exactly the sources
cargo saw, and a save after it must rebuild rather than load stale code. The
window between the batch and a load is largest for the renderer, which loads
when the window opens.
