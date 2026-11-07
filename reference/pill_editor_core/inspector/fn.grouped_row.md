<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4797"></a>

# Function `pill_editor_core::inspector::grouped_row`

```rust
pub(in inspector) fn grouped_row(component: &crate::editor_state::ComponentView, start_index: usize, tooltip: Option<String>) -> Option<(FieldRow, usize)>;
```

Visibility: `{'restricted': {'parent': 4798, 'path': '::inspector'}}` · Source: `editor\pill_editor_core\src\inspector.rs:533`

The grouped row that starts at `start_index`, with how many fields it
consumed.

A field marked as both a colour and a vector draws as a colour. The first
field's suffix decides which run can match at all, so only one grouping is
tried.
