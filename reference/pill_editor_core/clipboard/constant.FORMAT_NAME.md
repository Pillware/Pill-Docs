<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-908"></a>

# Constant `pill_editor_core::clipboard::FORMAT_NAME`

```rust
pub const FORMAT_NAME: &str = "PillEditor.Object";
```

Source: `editor\pill_editor_core\src\clipboard.rs:38`

The name of the clipboard format the structured payload is registered
under. The executable registers the name with `RegisterClipboardFormatW`
and writes the payload in that format beside the plain text.
