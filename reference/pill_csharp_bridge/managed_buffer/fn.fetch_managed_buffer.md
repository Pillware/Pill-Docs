<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1243"></a>

# Function `pill_csharp_bridge::managed_buffer::fetch_managed_buffer`

```rust
pub fn fetch_managed_buffer<impl FnOnce() -> u32: FnOnce() -> u32, impl FnOnce(*mut u8, u32) -> u8: FnOnce(*mut u8, u32) -> u8>(length: impl FnOnce() -> u32, copy: impl FnOnce(*mut u8, u32) -> u8, limit: u32) -> Result<Vec<u8>, ManagedBufferError>;
```

Source: `csharp\pill_csharp_bridge\src\managed_buffer.rs:84`

Fetches one managed payload through the two-call protocol.

`length` and `copy` are the two exported functions for this payload kind,
already bound to the index or receiver they need. `limit` is the largest
length this kind accepts. The returned buffer is exactly `length` bytes, and
the managed contract says a successful copy fills all of them.

The arguments are closures rather than function pointers for two reasons.
The exports are `extern "system"`, and that ABI does not implement the `Fn`
traits. Several payload kinds are also addressed by an index, which the
caller has to close over anyway.

## Errors

Returns [`ManagedBufferError::LengthOutOfRange`](enum.ManagedBufferError.md#rustdoc-item-1204) when the reported length is
zero, or above `limit`. Returns [`ManagedBufferError::AllocationFailed`](enum.ManagedBufferError.md#rustdoc-item-1206)
when a buffer that long cannot be reserved. Returns
[`ManagedBufferError::CopyFailed`](enum.ManagedBufferError.md#rustdoc-item-1207) when managed code declines to fill it.
Nothing is allocated in the first case, and the partially filled buffer is
discarded in the last.
