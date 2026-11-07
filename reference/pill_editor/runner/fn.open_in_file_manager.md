<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1557"></a>

# Function `pill_editor::runner::open_in_file_manager`

```rust
pub(in runner) fn open_in_file_manager(target: &std::path::Path);
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4106`

Ask the platform's file manager to show `target`: Windows and macOS select
the file beside its siblings, and the FreeDesktop helper opens the folder
that holds it.

A spawn the OS refuses is not worth failing a frame over: the caller has
already logged what it asked for, and no window is in a state to report it.
