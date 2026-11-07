<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-357"></a>

# Function `pill_csharp_bridge::abi::ffi_mirror_epoch`

```rust
pub(in abi) extern "C" fn ffi_mirror_epoch() -> u32;
```

Visibility: `{'restricted': {'parent': 6, 'path': '::abi'}}` · Source: `csharp\pill_csharp_bridge\src\abi.rs:512`

Report the epoch of the mirror-method table.

Managed code polls this before resolving a mirrored method: a value it has
not seen means the addresses it cached belong to an older published table.
