<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4613"></a>

# Constant `pill_engine_core::error::COMPONENT_NAME_COLLISION_REFUSAL`

```rust
pub(crate) const COMPONENT_NAME_COLLISION_REFUSAL: &str = "two live registrations claim one component type name; refusing to evict the peer's persist entries";
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\error.rs:632`

The refusal logged when two live registrations claim one component type
name.

This is the one place the sentence lives. The log line that reports a
[`WorldError::ComponentNameCollision`](enum.WorldError.md#rustdoc-item-4534) uses this constant, so a second guard
site cannot invent its own wording. It must not contain a double space or a
line break, because the message is read verbatim in host logs.
