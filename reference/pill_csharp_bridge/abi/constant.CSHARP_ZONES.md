<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1"></a>

# Constant `pill_csharp_bridge::abi::CSHARP_ZONES`

```rust
pub(in abi) const CSHARP_ZONES: $crate::thread::LocalKey<std::cell::RefCell<Vec<(u64, pill_core::profiling::TracyZone)>>> = _;
```

Visibility: `{'restricted': {'parent': 6, 'path': '::abi'}}` · Source: `csharp\pill_csharp_bridge\src\abi.rs:47`

C# profiling zones are opened and closed on the same scheduler thread.
Keeping the guards in a thread-local avoids moving a `TracyZone` (which
is not `Send`) to another thread, and [`end_unfinished_zones`](fn.end_unfinished_zones.md#rustdoc-item-0) closes
any zone a managed invocation left open when it returns.
