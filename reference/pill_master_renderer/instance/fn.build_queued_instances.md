<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-334"></a>

# Function `pill_master_renderer::instance::build_queued_instances`

```rust
pub(crate) fn build_queued_instances(render_queue: &[crate::render_queue::RenderQueueItem], frame_instances: &[crate::frame::RenderInstance], instance_matrices: &mut Vec<Instance>);
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\instance.rs:156`

Writes the model matrix of every queued instance into `instance_matrices`,
in queue order.

Queue order is draw order. The result is uploaded unchanged, so a draw
finds its instances by their queue positions. The work runs on Rayon's
global pool, the one inside `pill_core.dll` that every DLL shares: those
threads are already running, and none of them is left running this DLL's
code when the host reloads it, because the call returns only after every
task has finished.

## Panics

Panics when a queue item names a frame instance index that
`frame_instances` does not have.
