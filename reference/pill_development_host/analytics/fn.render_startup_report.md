<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-436"></a>

# Function `pill_development_host::analytics::render_startup_report`

```rust
pub(in analytics) fn render_startup_report(collector: &Analytics) -> String;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::analytics'}}` · Source: `hosting\pill_development_host\src\analytics.rs:1295`

Render the startup report as one multi-line log message ([`log_block_colored`]):
the title, the totals, one table row per module with a total row, then each
module's links and direct dependencies.

The title and the `elapsed: ... builds: N    reloads: N` line are parsed by
the suites and the benchmark harness (`devops/`), so their text stays as it
is. Columns that are empty for every module, such as `migrate` at startup
and `cargo` without `--timings`, are left out.
