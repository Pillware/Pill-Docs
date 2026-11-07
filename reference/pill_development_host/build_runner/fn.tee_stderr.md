<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-558"></a>

# Function `pill_development_host::build_runner::tee_stderr`

```rust
pub(in build_runner) fn tee_stderr(child: &mut std::process::Child) -> Option<std::thread::JoinHandle<()>>;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:99`

Reads `child`'s piped stderr on its own thread and copies every line to the
host's stderr and into [`BUILD_OUTPUT`](static.BUILD_OUTPUT.md#rustdoc-item-552).

The caller joins the handle before reading the ring buffer, so a failed
build's diagnostics are complete by the time it reports them.
