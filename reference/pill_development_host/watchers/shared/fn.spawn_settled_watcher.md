<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4452"></a>

# Function `pill_development_host::watchers::shared::spawn_settled_watcher`

```rust
pub(crate) fn spawn_settled_watcher<F, impl Fn(&EventKind) -> bool + Send + 'static: Fn(&notify::event::EventKind) -> bool + Send + 'static, impl Fn(&Path) -> bool + Send + 'static: Fn(&std::path::Path) -> bool + Send + 'static>(root: std::path::PathBuf, thread_name: &str, callback_error_message: &'static str, accepts_event: impl Fn(&notify::event::EventKind) -> bool + Send + 'static, accepts_path: impl Fn(&std::path::Path) -> bool + Send + 'static, on_settled_burst: F) -> Result<(), pill_core::error::WatcherError> where F: FnMut(&std::path::Path, Vec<std::path::PathBuf>) -> bool + Send + 'static;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\watchers\shared.rs:283`

Spawn the notify watcher and its debounce worker, the part the source,
asset and shader watchers share.

The callback keeps every path that `accepts_path` allows out of every event
that `accepts_event` allows. The worker waits out the debounce window,
collects the paths the burst produced and hands them to `on_settled_burst`,
which returns whether the worker should keep running. The watcher itself
moves into the worker, so its OS handles stay registered exactly as long as
the worker lives. `callback_error_message` is the message logged when the
backend hands the callback an error; watching must never panic inside it,
because some backends run it on their own threads.

## Errors

Returns [`WatcherError::CreationFailed`] when the platform watcher or the
worker thread cannot be created, and
[`WatcherError::RegistrationFailed`] when `root` cannot be watched.
