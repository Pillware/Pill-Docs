<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1741"></a>

# Function `pill_csharp_bridge::mirror_calls::is_callable_by_managed_code`

```rust
pub(crate) fn is_callable_by_managed_code(row: &super::ResolvedMirrorMethod) -> bool;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\mirror_calls.rs:297`

Reports whether managed code can call a resolved row.

An enum's or a resource's `__type` row only describes the type, so it has
no trampoline and its address is zero. An object's `__type` row is its drop
function and does have one. Only rows with an address go into the table
managed code calls through.
