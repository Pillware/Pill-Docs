<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7276"></a>

# Function `pill_editor_core::layout::persistence::save_to_path`

```rust
pub(in layout::persistence) fn save_to_path(dock: &super::EditorDock, path: std::path::PathBuf) -> Result<(), crate::error::LayoutPersistenceError>;
```

Visibility: `{'restricted': {'parent': 7232, 'path': '::layout::persistence'}}` · Source: `editor\pill_editor_core\src\layout\persistence.rs:212`

Write `dock` as a YAML document at `path`, replacing the file there.

The document is written from [`EditorDock::settled`](../dock/struct.EditorDock.md#rustdoc-item-7186), which replaces the
infinite placeholder rectangles of a dock that was never laid out with
zeros, since no document format can hold them and the next show recomputes
them.

## Errors

[`LayoutPersistenceError::Serialization`](../../error/enum.LayoutPersistenceError.md#rustdoc-item-4066) when the dock cannot be turned
into YAML, and [`LayoutPersistenceError::Filesystem`](../../error/enum.LayoutPersistenceError.md#rustdoc-item-4069) when the directory,
the temporary file or the target cannot be written.
