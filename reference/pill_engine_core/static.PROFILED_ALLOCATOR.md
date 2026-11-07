<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9173"></a>

# Static `pill_engine_core::PROFILED_ALLOCATOR`

```rust
pub(crate) static PROFILED_ALLOCATOR: tracy_client::ProfiledAllocator<std::alloc::System> = _;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\lib.rs:51`

Tracy profiled allocator that reports every allocation in Tracy's memory
view.

Only active with the opt-in `profiling-memory` feature. The sampling rate
comes from
[`crate::config::PROFILING_MEMORY_ALLOCATIONS_SAMPLING_FREQUENCY`](config/constant.PROFILING_MEMORY_ALLOCATIONS_SAMPLING_FREQUENCY.md#rustdoc-item-3503).

It is declared here and not in the `profiling` module because it is
generic: every DLL that links it creates its own copy, and that copy calls
Tracy's C entry points directly. Those entry points exist only inside
`pill_core.dll`, which exports Rust symbols alone, so a separate extension
DLL fails to link with "undefined symbol ___tracy_emit_memory_*".
