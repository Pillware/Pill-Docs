<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1116"></a>

# Function `pill_csharp_bridge::context::declared_access_allows`

```rust
pub(in context) fn declared_access_allows(access_kind: u8, key: super::components::StableComponentId, requested_mode: u8) -> Option<bool>;
```

Visibility: `{'restricted': {'parent': 1030, 'path': '::context'}}` · Source: `csharp\pill_csharp_bridge\src\context.rs:462`

Returns whether the active system's declared access list allows one request.

An exclusive scope (a startup method) allows every resource access and no
component access, because a startup has no queries that could have declared
one.
