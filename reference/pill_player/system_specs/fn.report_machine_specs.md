<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-738"></a>

# Function `pill_player::system_specs::report_machine_specs`

```rust
pub(crate) fn report_machine_specs();
```

Visibility: `crate` · Source: `hosting\pill_player\src\system_specs.rs:47`

Reports the detected hardware through the telemetry stack.

The report has the CPU brand and its physical core and logical thread
counts, RAM and swap in GiB, one line per disk, the OS name and version
with the build architecture, and the system uptime. It ends with a line
that leaves the GPU to external tools.

It goes out as one multi-line event under `telemetry_target::SYSTEM`, so
it can be filtered or redirected like any other engine output, and its
box-drawing layout stays in one block.

[`Runtime::new`](../runtime/struct.Runtime.md#rustdoc-item-316) calls it before it creates the
engine.
