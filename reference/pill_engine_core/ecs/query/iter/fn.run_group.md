<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3967"></a>

# Function `pill_engine_core::ecs::query::iter::run_group`

```rust
pub(in ecs::query::iter) fn run_group<Q, F, Func>(archetype_ranges: &[super::FilteredArchetypeRange<<Q as >::State, <F as >::State>], slices: &[(usize, usize, usize)], f: &Func) -> usize where Q: QueryTarget, F: QueryFilter, Func: Fn(<Q as >::Item<'_>);
```

Visibility: `{'restricted': {'parent': 3816, 'path': '::ecs::query::iter'}}` · Source: `engine\pill_engine_core\src\ecs\query\iter.rs:837`

Walks one work group's slices and returns how many rows it visited.

Every dispatch path runs rows through this loop: it takes the archetype's
cached states by index, then fetches each row the filter accepts.
