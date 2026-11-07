<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1163"></a>

# Function `pill_editor_core::clipboard::can_copy`

```rust
pub fn can_copy(selection: &crate::editor_state::EditorSelection, snapshot: &crate::editor_state::EditorSnapshot) -> bool;
```

Source: `editor\pill_editor_core\src\clipboard.rs:317`

Reports whether the selection holds something a copy would write.

This is the boolean form of [`selection_payload`](fn.selection_payload.md#rustdoc-item-1161), and the Edit menu's Copy
and Cut rows read it: a row is offered exactly when the copy it runs would
carry something. An entity whose detail the snapshot has not captured yet
has no payload, so the row stays unavailable until the next capture.
