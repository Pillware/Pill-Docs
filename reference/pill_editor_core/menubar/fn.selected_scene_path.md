<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5562"></a>

# Function `pill_editor_core::menubar::selected_scene_path`

```rust
pub(in menubar) fn selected_scene_path(selection: &crate::editor_state::EditorSelection) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 5563, 'path': '::menubar'}}` · Source: `editor\pill_editor_core\src\menubar.rs:253`

Returns the `.scene` asset the Assets tab has selected, as the path Open
Scene loads. `None` means the selection is not a scene file.
