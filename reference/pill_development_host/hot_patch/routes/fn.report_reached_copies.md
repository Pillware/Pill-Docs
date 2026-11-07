<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2198"></a>

# Function `pill_development_host::hot_patch::routes::report_reached_copies`

```rust
pub(in hot_patch::routes) fn report_reached_copies<impl FnOnce() -> String: FnOnce() -> String>(reached_labels: &[String], function: &str, nothing_reached: impl FnOnce() -> String, message: &'static str) -> Result<(), String>;
```

Visibility: `{'restricted': {'parent': 2087, 'path': '::hot_patch::routes'}}` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:467`

Reports which copies took the change, or explains that none was reached.

All three routes end this way. Reaching no copy is an error rather than a
silent success, because it means the replacement is not running anywhere.
The wording of that error differs per route, so the caller supplies it.

## Errors

Fails when `reached_labels` is empty, with the message `nothing_reached`
builds.
