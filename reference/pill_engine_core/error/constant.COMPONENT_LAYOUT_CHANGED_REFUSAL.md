<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4614"></a>

# Constant `pill_engine_core::error::COMPONENT_LAYOUT_CHANGED_REFUSAL`

```rust
pub(crate) const COMPONENT_LAYOUT_CHANGED_REFUSAL: &str = "was re-registered with a different size or alignment; keeping the running generation";
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\error.rs:641`

The refusal logged when a reloading generation re-registers a persistable
component with a layout the previous generation's column cannot host.

Written the same way as [`COMPONENT_NAME_COLLISION_REFUSAL`](constant.COMPONENT_NAME_COLLISION_REFUSAL.md#rustdoc-item-4613): the log line
that reports a [`WorldError::ComponentLayoutChanged`](enum.WorldError.md#rustdoc-item-4540) uses this constant,
and the reload migration suite matches its text.
