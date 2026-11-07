<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1027"></a>

# Constant `pill_csharp_bridge::context::ACTIVE_SCOPE`

```rust
pub(in context) const ACTIVE_SCOPE: $crate::thread::LocalKey<std::cell::Cell<Option<ActiveScopeData>>> = _;
```

Visibility: `{'restricted': {'parent': 1030, 'path': '::context'}}` · Source: `csharp\pill_csharp_bridge\src\context.rs:54`

The complete managed invocation scope for the current thread.

`None` means no managed code is running on this thread, whether a
system or a startup method.
