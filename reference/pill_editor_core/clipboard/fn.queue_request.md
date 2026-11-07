<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1165"></a>

# Function `pill_editor_core::clipboard::queue_request`

```rust
pub fn queue_request(clipboard: &mut EditorClipboard, action: ClipboardAction, selection: &crate::editor_state::EditorSelection, snapshot: &crate::editor_state::EditorSnapshot) -> Option<String>;
```

Source: `editor\pill_editor_core\src\clipboard.rs:358`

Queues the request alone: the write a copy or a cut needs, or the read a
paste needs.

It is split from [`queue_action`](fn.queue_action.md#rustdoc-item-1164) because the caller reaches the two
resources behind separate borrows: the request lives on the clipboard
resource, and the recorded delete on the pending-command queue. Both cannot
be borrowed mutably at once.

Returns the payload's one-line summary for the caller's log line, `read` for
a paste, or `None` when a copy or a cut found nothing to write.
