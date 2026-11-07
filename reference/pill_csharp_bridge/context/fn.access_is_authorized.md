<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1112"></a>

# Function `pill_csharp_bridge::context::access_is_authorized`

```rust
pub(crate) fn access_is_authorized(key: super::components::StableComponentId, requested_mode: u8) -> Option<bool>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\context.rs:431`

Checks whether the active system declared the requested component mode.

A write declaration also allows reads. A read declaration never allows
writes. `None` means no managed invocation is active on this thread.
