<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-114"></a>

# Function `pill_spline_editor::spline_insert`

```rust
pub(crate) fn spline_insert(entity: pill_engine::Entity, kind: &str, id: Option<u64>, transform: pill_editor_core::tools::ElementTransform, world: &mut pill_engine::World) -> Option<u64>;
```

Visibility: `crate` · Source: `extensions\pill_spline\modules\editor\src\pill_spline_editor.rs:294`

Inserts one control point, answering the index it took.

`id` is the index the editor asks the point to take, which is what an undo
restoring a removed point passes; `None` appends, which is what the menu row
and the key do.
