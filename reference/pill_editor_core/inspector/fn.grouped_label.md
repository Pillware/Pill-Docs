<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4799"></a>

# Function `pill_editor_core::inspector::grouped_label`

```rust
pub(in inspector) fn grouped_label(component: &crate::editor_state::ComponentView, start_index: usize, fallback_label: &str) -> String;
```

Visibility: `{'restricted': {'parent': 4798, 'path': '::inspector'}}` · Source: `editor\pill_editor_core\src\inspector.rs:587`

The name a grouped row labels itself with: the dotted prefix its leaves
share.

When the leaves have no prefix, the row is named after its kind. The
`Color` component's own channels are `r`, `g`, `b` and `a`, with nothing in
front of them.
