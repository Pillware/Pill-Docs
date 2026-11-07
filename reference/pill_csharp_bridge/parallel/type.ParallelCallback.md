<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1754"></a>

# Type alias `pill_csharp_bridge::parallel::ParallelCallback`

```rust
pub(crate) type ParallelCallback = extern "C" fn (_: *mut std::ffi::c_void, _: u32);
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\parallel.rs:59`

The managed trampoline's signature: the `[UnmanagedCallersOnly]` static
invoked once per work item.
