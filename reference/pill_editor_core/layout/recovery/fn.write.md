<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7328"></a>

# Function `pill_editor_core::layout::recovery::write`

```rust
pub fn write(document: &RecoveryDocument) -> bool;
```

Source: `editor\pill_editor_core\src\layout\recovery.rs:95`

Writes the document, replacing the previous one.

Returns whether it was written. A failure is logged and the editor keeps
running, because losing recoverability must not stop the editor.
