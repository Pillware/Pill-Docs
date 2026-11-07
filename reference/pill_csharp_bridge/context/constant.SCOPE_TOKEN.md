<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1035"></a>

# Constant `pill_csharp_bridge::context::SCOPE_TOKEN`

```rust
pub(in context) const SCOPE_TOKEN: $crate::thread::LocalKey<std::cell::Cell<u32>> = _;
```

Visibility: `{'restricted': {'parent': 1030, 'path': '::context'}}` · Source: `csharp\pill_csharp_bridge\src\context.rs:54`

Counter of managed invocations on this thread, copied into every chunk.

Zero means no managed code is running on this thread, so it also gives
the out-of-scope answer. The counter only moves forward and skips zero
when it wraps, so a token from an earlier invocation never equals the
current one and nothing has to be cleared when the invocation ends.
