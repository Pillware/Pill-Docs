<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3667"></a>

# Function `pill_editor_core::editor_state::refuse_module_resource`

```rust
pub(in editor_state) fn refuse_module_resource(command: &EditorCommand, relative_path: &std::path::Path) -> Result<(), String>;
```

Visibility: `{'restricted': {'parent': 2404, 'path': '::editor_state'}}` · Source: `editor\pill_editor_core\src\editor_state\mod.rs:1207`

Returns an error when `relative_path` names one of a module's resources.

A module's resources are listed and inspected, never written. The check sits
in every mutation arm, so the widget, the context menu and the scripted
channel all reach it. The [`EXTENSIONS_ROOT`](constant.EXTENSIONS_ROOT.md#rustdoc-item-557) itself is refused too: no
asset of the project's lives there, so a command carrying a key that deep is
a bug rather than an edit.
