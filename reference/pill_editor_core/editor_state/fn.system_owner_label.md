<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4040"></a>

# Function `pill_editor_core::editor_state::system_owner_label`

```rust
pub(in editor_state) fn system_owner_label(system_owner: pill_engine::SystemOwner, extension_names: &[String]) -> String;
```

Visibility: `{'restricted': {'parent': 2471, 'path': '::editor_state'}}` · Source: `editor\pill_editor_core\src\editor_state\mod.rs:1616`

Labels a system owner using the host's extension names.

The owner's index is decoded by [`SystemOwner::extension_index`]. An
extension the host does not name falls back to the owner's own rendering.
