<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4454"></a>

# Function `pill_development_host::watchers::shared::spawn_source_watcher`

```rust
pub(crate) fn spawn_source_watcher(workspace_root: std::path::PathBuf, module_name: &str, watch_directory: &str, reload_generation: std::sync::Arc<std::sync::atomic::AtomicU64>, triggers: Option<std::sync::Arc<TriggerLog>>) -> Result<(), pill_core::error::WatcherError>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\watchers\shared.rs:371`

Watch the configured source tree and ask for a reload from a worker
thread.

## Errors

Returns [`WatcherError::WatchDirectoryMissing`] when the joined watch path
does not exist, and otherwise the failures [`spawn_settled_watcher`](fn.spawn_settled_watcher.md#rustdoc-item-4452)
reports: creating the watcher or the worker, and registering the watch.
