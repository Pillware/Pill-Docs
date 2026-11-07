<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-180"></a>

# Function `pill_editor_core::assets::drop_destination`

```rust
pub fn drop_destination(from: &str, folder: &str) -> Option<String>;
```

Source: `editor\pill_editor_core\src\assets.rs:629`

Returns where a file dragged onto `folder` goes: its own name below the
folder's path.

`None` when the file already lives there, so a drop that changes nothing
queues no command.
