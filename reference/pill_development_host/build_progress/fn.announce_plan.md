<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-474"></a>

# Function `pill_development_host::build_progress::announce_plan`

```rust
pub(crate) fn announce_plan(project_name: &str, builds: Vec<PlannedBuild>);
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_progress.rs:63`

Records the startup build plan and logs it as one multi-line entry.

`project_name` is the project's display name. Any earlier plan is replaced.
