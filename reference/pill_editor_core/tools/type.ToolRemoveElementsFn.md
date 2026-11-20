<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11016"></a>

# Type alias `pill_editor_core::tools::ToolRemoveElementsFn`

```rust
pub type ToolRemoveElementsFn = fn (entity: pill_engine::Entity, kind: &str, elements: &[u64], world: &mut pill_engine::World) -> usize;
```

Source: `editor\pill_editor_core\src\tools.rs:487`

Removes elements of the tool's component, answering how many it removed.
