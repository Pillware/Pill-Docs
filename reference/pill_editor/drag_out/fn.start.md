<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-248"></a>

# Function `pill_editor::drag_out::start`

```rust
pub fn start(absolute_path: &str) -> DragOutOutcome;
```

Source: `editor\pill_editor\src\drag_out.rs:118`

Hands `absolute_path` to OLE as a file drag and blocks until the drag ends.

Logs `[editor] drag out prepared` once the data object exists, and a warning
naming the reason when a step fails. The runner logs one line for each of
the other outcomes, so every way a drag can end leaves a trace.

A drag started with no button held is refused rather than run, because the
modal loop would freeze the editor until more input arrived.
