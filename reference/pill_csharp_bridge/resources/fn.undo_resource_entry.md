<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2031"></a>

# Function `pill_csharp_bridge::resources::undo_resource_entry`

```rust
pub(in resources) fn undo_resource_entry(engine: &mut pill_engine::Engine, undo: ResourceUndo);
```

Visibility: `{'restricted': {'parent': 1993, 'path': '::resources'}}` · Source: `csharp\pill_csharp_bridge\src\resources.rs:497`

Moves a renamed resource's value back onto its predecessor, best effort.

A failed rollback leaves the process mixed. The failure is therefore logged
with the resource it concerns, rather than returned in place of the original
refusal.
