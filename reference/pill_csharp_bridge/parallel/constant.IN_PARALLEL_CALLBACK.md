<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1753"></a>

# Constant `pill_csharp_bridge::parallel::IN_PARALLEL_CALLBACK`

```rust
pub(in parallel) const IN_PARALLEL_CALLBACK: $crate::thread::LocalKey<std::cell::Cell<bool>> = _;
```

Visibility: `{'restricted': {'parent': 1752, 'path': '::parallel'}}` · Source: `csharp\pill_csharp_bridge\src\parallel.rs:43`

Whether this thread is inside a parallel callback right now.

The flag is set before each callback runs and restored after it, on
whichever thread runs the callback. A nested dispatch is therefore
refused the same way on every thread, including the calling thread,
which already has a managed scope.
