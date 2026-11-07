<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6701"></a>

# Function `pill_editor_core::scene_workflow::scene_file_name`

```rust
pub fn scene_file_name(requested_name: &str) -> String;
```

Source: `editor\pill_editor_core\src\scene_workflow.rs:352`

Add the `.scene` extension to `requested_name` when it has none.

Surrounding spaces are trimmed, and the extension is matched in any letter
case, so `My Scene.SCENE` is left alone.
