<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-14"></a>

# Static `pill_csharp_bridge::abi::MIRROR_EPOCH`

```rust
pub(in abi) static MIRROR_EPOCH: std::sync::atomic::AtomicU32 = _;
```

Visibility: `{'restricted': {'parent': 6, 'path': '::abi'}}` · Source: `csharp\pill_csharp_bridge\src\abi.rs:74`

Epoch of the mirror-method table.

Increased by one after every republish, so managed code can tell that the
addresses it holds were resolved against a table that no longer exists. It
can then resolve them again without waiting for the assembly swap that
would normally carry a rebind.
