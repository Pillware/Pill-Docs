<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-358"></a>

# Function `pill_csharp_bridge::abi::ffi_copy_mirror_methods`

```rust
pub(in abi) extern "C" fn ffi_copy_mirror_methods(out: *mut MirrorMethodEntry, max: u32) -> u32;
```

Visibility: `{'restricted': {'parent': 6, 'path': '::abi'}}` · Source: `csharp\pill_csharp_bridge\src\abi.rs:523`

Copies up to `max` mirror-method rows into `out` and returns the number
written.

## Safety

`out` must point at `max` writable [`MirrorMethodEntry`](struct.MirrorMethodEntry.md#rustdoc-item-119) slots owned by the
managed runtime for the duration of the call.
