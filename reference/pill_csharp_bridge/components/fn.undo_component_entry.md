<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-981"></a>

# Function `pill_csharp_bridge::components::undo_component_entry`

```rust
pub(in components) fn undo_component_entry(engine: &mut pill_engine::Engine, undo: ComponentUndo);
```

Visibility: `{'restricted': {'parent': 781, 'path': '::components'}}` · Source: `csharp\pill_csharp_bridge\src\components.rs:971`

Reverse one applied component entry, best effort.

A rollback that fails leaves the process half-applied, so the failure is
logged with the component it concerns instead of replacing the original
refusal, which is the error the caller needs.
