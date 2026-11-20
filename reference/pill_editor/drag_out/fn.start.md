<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-188"></a>

# Function `pill_editor::drag_out::start`

```rust
pub fn start(absolute_path: &str, driven_by_pointer: bool) -> DragOutOutcome;
```

Source: `editor\pill_editor\src\drag_out.rs:197`

Hands `absolute_path` to OLE as a file drag and blocks until the drag ends.

Logs `[editor] drag out prepared` once the data object exists, and a warning
naming the reason when a step fails. The runner logs one line for each of
the other outcomes, so every way a drag can end leaves a trace.

`driven_by_pointer` says whether a person's pointer started the drag. Only a
pointer drag runs OLE's loop; one asked for by anything else - the scripted
channel, whose input never reaches the pointer - stops once the data object
exists, because the loop would freeze the editor until more input arrived.
A pointer drag started with no button held is refused for the same reason.
