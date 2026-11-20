<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6926"></a>

# Function `pill_editor_core::inspector::selection_stamp`

```rust
pub(in inspector) fn selection_stamp(selected_details: &[crate::editor_state::EntityDetail], component: &str) -> u64;
```

Visibility: `{'restricted': {'parent': 6761, 'path': '::inspector'}}` · Source: `editor\pill_editor_core\src\inspector.rs:824`

A stamp over the two facts that change a component's write targets: which
entities are selected, and whether each of them carries the component.
