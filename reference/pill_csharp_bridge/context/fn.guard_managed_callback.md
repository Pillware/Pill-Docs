<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1104"></a>

# Function `pill_csharp_bridge::context::guard_managed_callback`

```rust
pub(crate) fn guard_managed_callback<impl FnOnce() -> u8: FnOnce() -> u8>(callback_name: &'static str, failure_status: u8, body: impl FnOnce() -> u8) -> u8;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\context.rs:290`

Runs one managed FFI callback and turns a panic into its failure status.

Since Rust 1.81 a panic that crosses an `extern "C"` boundary aborts the
process instead of being undefined. This function reports the failure status
instead, so the process keeps running, and the managed side then fails the
running system through its per-system error channel. The panic payload is
logged here because a status code cannot carry it.

`AssertUnwindSafe` is required because these callbacks take raw pointers,
which are never `UnwindSafe`. The assertion is sound because a failed
callback leaves the frame's work incomplete, and both the deferred command
queue and the invocation scope are torn down when the system reports
failure.
