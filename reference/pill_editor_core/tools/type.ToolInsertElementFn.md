<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11014"></a>

# Type alias `pill_editor_core::tools::ToolInsertElementFn`

```rust
pub type ToolInsertElementFn = fn (entity: pill_engine::Entity, kind: &str, id: Option<u64>, transform: ElementTransform, world: &mut pill_engine::World) -> Option<u64>;
```

Source: `editor\pill_editor_core\src\tools.rs:478`

Inserts one element of the tool's component.

`id` is the id the caller asks the element to take, which is what an undo
restoring a removed element needs; `None` lets the tool choose one. The
answer is the id the element has now, or `None` when the tool cannot insert
it.
