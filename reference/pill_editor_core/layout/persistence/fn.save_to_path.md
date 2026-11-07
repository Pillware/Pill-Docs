<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5313"></a>

# Function `pill_editor_core::layout::persistence::save_to_path`

```rust
pub(in layout::persistence) fn save_to_path(dock: &super::EditorDock, path: std::path::PathBuf) -> Result<(), crate::error::LayoutPersistenceError>;
```

Visibility: `{'restricted': {'parent': 5269, 'path': '::layout::persistence'}}` · Source: `editor\pill_editor_core\src\layout\persistence.rs:211`

Write `dock` as a JSON document at `path`, replacing the file there.

The document is written from [`EditorDock::settled`](../dock/struct.EditorDock.md#rustdoc-item-5223), which replaces the
infinite placeholder rectangles of a dock that was never laid out with
zeros, since JSON cannot hold them and the next show recomputes them.

## Errors

[`LayoutPersistenceError::Serialization`](../../error/enum.LayoutPersistenceError.md#rustdoc-item-3689) when the dock cannot be turned
into JSON, and [`LayoutPersistenceError::Filesystem`](../../error/enum.LayoutPersistenceError.md#rustdoc-item-3692) when the directory,
the temporary file or the target cannot be written.
