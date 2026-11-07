<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4801"></a>

# Function `pill_editor_core::inspector::channel_run`

```rust
pub(in inspector) fn channel_run(component: &crate::editor_state::ComponentView, start_index: usize, suffixes: &[&str], required_decorator: &pill_engine::component_registry::FieldDecorator, minimum_leaf_count: usize) -> Option<Vec<RowLeaf>>;
```

Visibility: `{'restricted': {'parent': 4798, 'path': '::inspector'}}` · Source: `editor\pill_editor_core\src\inspector.rs:615`

A run of consecutive scalar leaves, starting at `start_index`, that form
the channels of one grouped row.

Every leaf in the run must share the first leaf's dotted prefix, carry
`required_decorator`, hold a numeric value and use the next suffix from
`suffixes` in order. The run stops at the first leaf that does not match.
A run shorter than `minimum_leaf_count` is no row at all: a `fill.r` with
no `fill.g` is just a float.
