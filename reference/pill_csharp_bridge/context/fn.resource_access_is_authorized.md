<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1114"></a>

# Function `pill_csharp_bridge::context::resource_access_is_authorized`

```rust
pub(crate) fn resource_access_is_authorized(key: super::components::StableComponentId, requested_mode: u8) -> Option<bool>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\context.rs:441`

The resource counterpart of [`access_is_authorized`](fn.access_is_authorized.md#rustdoc-item-1112).

This is a separate function instead of a flag on the component check
because the two look at different declarations that happen to share one key
space. A resource and a component can have the same key, and a component
entry must never give access to resource storage.
