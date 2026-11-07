<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1115"></a>

# Function `pill_csharp_bridge::context::native_resource_access_is_authorized`

```rust
pub(crate) fn native_resource_access_is_authorized(key: super::components::StableComponentId, requested_mode: u8) -> Option<bool>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\context.rs:450`

The counterpart of [`resource_access_is_authorized`](fn.resource_access_is_authorized.md#rustdoc-item-1114) for a Rust-owned
resource that is reached by its shared name.
