<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-454"></a>

# Function `pill_editor_shell_egui_editor::shell::chrome::remember_moved_rect`

```rust
pub fn remember_moved_rect(logged: &mut LoggedRects<String>, key: &str, rect: egui::Rect) -> bool;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\chrome.rs:359`

Records one keyed rectangle and answers whether it is new or has moved, so
a section that shifts as a panel grows or collapses is logged again instead
of keeping its old place in the log.

The comparison is pixel-exact: a section header is an anchor a suite
clicks, so half a point of drift is a different target.
