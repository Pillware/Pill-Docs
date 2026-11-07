<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-475"></a>

# Static `pill_development_host::build_progress::STARTUP_BUILD_PLAN`

```rust
pub(in build_progress) static STARTUP_BUILD_PLAN: std::sync::Mutex<Option<BuildPlan>> = _;
```

Visibility: `{'restricted': {'parent': 477, 'path': '::build_progress'}}` · Source: `hosting\pill_development_host\src\build_progress.rs:33`

The plan for the current start. It is `None` until [`announce_plan`](fn.announce_plan.md#rustdoc-item-474)
records one, and `None` again once the last planned build has started.
