<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-397"></a>

# Constant `pill_csharp_bridge::backend::POLL_MANIFEST_PENDING`

```rust
pub const POLL_MANIFEST_PENDING: u8 = 3;
```

Source: `csharp\pill_csharp_bridge\src\backend.rs:87`

A behaviour-compatible assembly is loaded and waiting for the host to
decide whether its component manifest can be applied.

The managed loader cannot make that decision. Whether a manifest change is
safe depends on what each component is bound to natively, and only the host
holds those bindings. The host answers during the same poll.
