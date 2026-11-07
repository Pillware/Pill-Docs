<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3503"></a>

# Constant `pill_engine_core::config::PROFILING_MEMORY_ALLOCATIONS_SAMPLING_FREQUENCY`

```rust
pub const PROFILING_MEMORY_ALLOCATIONS_SAMPLING_FREQUENCY: u16 = 10;
```

Source: `engine\pill_engine_core\src\config.rs:44`

Callstack depth recorded for each allocation by
`tracy_client::ProfiledAllocator`.

`0` records no callstack. A non-zero value records up to that many call
frames, which is what shows where an allocation came from in Tracy's
memory view; deeper stacks cost more, and Windows keeps at most 62 frames.
Every allocation is recorded either way - this value decides only how much
of the callstack is kept.
