<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-686"></a>

# Function `pill_editor_shell::shell::inspector_fields::record_row_placement`

```rust
pub fn record_row_placement(logged: &mut LoggedRects<String>, key: &str, rect: egui::Rect) -> Option<egui::Rect>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:999`

Records `rect` as `key`'s placement and returns it when the log has not
named that placement yet.

The comparison is [`LoggedRects::remember`]'s, which rounds to whole
points, and the returned rectangle is rounded the same way. The numbers in
the log are therefore the ones that were compared. A row that leaves the
visible area keeps its last placement, so scrolling back to it does not log
again.
