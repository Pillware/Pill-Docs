<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4376"></a>

# Function `pill_development_host::runtime::pause_after_boundary`

```rust
pub(in runtime) fn pause_after_boundary(paused: Option<PauseReason>, data_layout_changed: bool, step: RendererStep) -> Option<PauseReason>;
```

Visibility: `{'restricted': {'parent': 4115, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:1960`

Whether rendering should be paused after one frame boundary.

`paused` is the state before it. `data_layout_changed` says whether the
renderer's data crate reloaded this boundary with a different component
layout. `step` is what the renderer step did.

A renderer that attached successfully always resumes. A layout change
without one pauses, and anything else keeps the current state.
