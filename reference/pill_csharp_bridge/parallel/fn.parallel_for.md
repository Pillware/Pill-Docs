<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1787"></a>

# Function `pill_csharp_bridge::parallel::parallel_for`

```rust
pub(crate) fn parallel_for<impl Fn(u32) + Send + Sync: Fn(u32) + Send + Sync>(count: u32, run: impl Fn(u32) + Send + Sync) -> u8;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\parallel.rs:99`

Runs `run(index)` for every index in `0..count` on the shared pool and
returns after every invocation has finished.

Returns [`PARALLEL_OK`](constant.PARALLEL_OK.md#rustdoc-item-1748) when every index ran, [`PARALLEL_NO_SCOPE`](constant.PARALLEL_NO_SCOPE.md#rustdoc-item-1749) when
no managed system is active on the calling thread, or [`PARALLEL_NESTED`](constant.PARALLEL_NESTED.md#rustdoc-item-1750)
when the call came from inside a parallel callback.
