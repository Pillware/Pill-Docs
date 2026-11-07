<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5565"></a>

# Function `pill_editor_core::menubar::menu_row_for_toolbox_item`

```rust
pub(in menubar) fn menu_row_for_toolbox_item(item: crate::toolbox::ToolboxItem, toolbox_state: &crate::toolbox::ToolboxState) -> (String, MenuAction, Option<bool>);
```

Visibility: `{'restricted': {'parent': 5563, 'path': '::menubar'}}` · Source: `editor\pill_editor_core\src\menubar.rs:417`

Returns a toolbox row as menu data: the label it shows for the current
state, the recorded command a click queues, and whether it reads as active.
