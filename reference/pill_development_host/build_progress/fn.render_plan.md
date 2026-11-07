<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-542"></a>

# Function `pill_development_host::build_progress::render_plan`

```rust
pub(in build_progress) fn render_plan(project_name: &str, planned_builds: &[PlannedBuild]) -> String;
```

Visibility: `{'restricted': {'parent': 477, 'path': '::build_progress'}}` · Source: `hosting\pill_development_host\src\build_progress.rs:116`

Builds the message [`announce_plan`](fn.announce_plan.md#rustdoc-item-474) logs: a heading and the numbered
modules.
