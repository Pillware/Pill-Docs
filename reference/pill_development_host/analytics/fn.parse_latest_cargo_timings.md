<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-189"></a>

# Function `pill_development_host::analytics::parse_latest_cargo_timings`

```rust
pub(crate) fn parse_latest_cargo_timings(workspace_root: &std::path::Path) -> Option<CargoTiming>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:551`

Read the newest `.html` report under the build tree's `cargo-timings`
folder.

Cargo embeds a JSON `UNIT_DATA` array at the end of the HTML, with one
entry per unit carrying `name`, `mode`, `start`, `duration` (in seconds)
and `sections`. Only crates that actually compiled or linked in that run
have a non-zero duration, which is exactly what a report about a rebuild
needs. Returns `None` when there is no report yet, or when the embedded
JSON cannot be parsed.
