<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3733"></a>

# Function `pill_editor_core::layout::persistence::save`

```rust
pub fn save(dock: &super::EditorDock);
```

Source: `editor\pill_editor_core\src\layout\persistence.rs:189`

Save `dock` to the layout directory.

A failed write leaves the previous document untouched and is logged as a
warning, since the caller has nothing to do about it.
