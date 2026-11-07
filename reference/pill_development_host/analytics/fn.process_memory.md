<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-161"></a>

# Function `pill_development_host::analytics::process_memory`

```rust
pub(crate) fn process_memory(pid: Option<u32>) -> Option<(u64, u64)>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:407`

Current and peak working set (resident set) of a process, in bytes.

A `pid` of `None` asks about the host process itself. Returns `None` when
the OS exposes no usable counter, for example when Linux has no `/proc`.
