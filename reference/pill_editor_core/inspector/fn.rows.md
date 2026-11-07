<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4796"></a>

# Function `pill_editor_core::inspector::rows`

```rust
pub fn rows(component: &crate::editor_state::ComponentView) -> Vec<FieldRow>;
```

Source: `editor\pill_editor_core\src\inspector.rs:398`

The rows a component section draws, in field order.

A scalar array of two to four elements becomes one vector row, the way
Unity draws a `Vector3` as three fields on one line. Anything longer draws
as one read-only row.

The decorators are applied here, so the shell only draws what the model
asks for. `[HideInInspector]` drops the field together with its header and
gap. `[Header]` and `[Space]` add their own rows above the field, in
declaration order. A `[Tooltip]` is shown on the field's row.
