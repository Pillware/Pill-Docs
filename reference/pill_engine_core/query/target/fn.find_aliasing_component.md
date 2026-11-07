<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7210"></a>

# Function `pill_engine_core::query::target::find_aliasing_component`

```rust
pub(crate) fn find_aliasing_component(read_component_ids: &[crate::component::ComponentId], write_component_ids: &[crate::component::ComponentId]) -> Option<crate::component::ComponentId>;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\query\target.rs:392`

Returns the first component that a target writes twice or both reads and
writes, or `None` when nothing is aliased.

Such a component produces overlapping `&` and `&mut` borrows of one row,
which is undefined behavior. Two shapes are caught: writing one component
twice (`Query<(&mut T, &mut T)>`) and reading one while also writing it
(`Query<(&T, &mut T)>`).
