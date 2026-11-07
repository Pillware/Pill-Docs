<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-817"></a>

# Function `pill_development_host::build_runner::source_newer_than`

```rust
pub(in build_runner) fn source_newer_than(directory: &std::path::Path, reference_time: std::time::SystemTime) -> bool;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:2170`

Checks whether any entry under `directory` was modified after
`reference_time`.

Watch directories hold module sources and are small, so the walk is cheap per
load. Anything unreadable counts as newer, which costs one build and can never
load stale code.
