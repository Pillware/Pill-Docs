<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-473"></a>

# Function `pill_development_host::analytics::print_reload_events`

```rust
pub(crate) fn print_reload_events(reload_started: pill_core::platform::Instant) -> usize;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:1637`

Log one line per completed hot reload and a summary of the whole
transaction, as a single multi-line entry.

Called at the end of the reload step, once the frame's reloads are done, so
the console shows the build → stage → load → init → migrate breakdown as it
happens. `reload_started` is the moment the reload transaction began, before
the first build, so the total spans the whole cascade - the edited module
plus the queued project reload - and not only the last reload. Returns the
number of reload events reported.

The `Hot reload finished ...` and `crates rebuilt by cargo:` lines keep the
exact text the suites and the benchmark harness's line parser read.
Their colors reach an interactive terminal only (see `log_block_colored`).
