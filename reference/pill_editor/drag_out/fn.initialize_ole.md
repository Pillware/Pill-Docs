<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-251"></a>

# Function `pill_editor::drag_out::initialize_ole`

```rust
pub(in drag_out) fn initialize_ole() -> bool;
```

Visibility: `{'restricted': {'parent': 18, 'path': '::drag_out'}}` · Source: `editor\pill_editor\src\drag_out.rs:225`

Initialises OLE on the calling thread, once.

`DoDragDrop` needs an OLE-initialised thread. The editor's main thread owns
the window, so that is where this runs. A failure leaves drag-out
unavailable and is logged once.
