<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3672"></a>

# Function `pill_editor_core::editor_state::roll_back_files`

```rust
pub(in editor_state) fn roll_back_files(paths: &[String]) -> Vec<String>;
```

Visibility: `{'restricted': {'parent': 2404, 'path': '::editor_state'}}` · Source: `editor\pill_editor_core\src\editor_state\mod.rs:1264`

Removes the files a command created and returns the ones it could not
remove.

A failed asset-file command takes its own work back, so a half-applied
change is not left for the asset watcher to import as an unrecorded edit.
The removal can fail as well, from a locked file, a permission or a disk
error, and those cases are what this reports: the paths still on disk.
