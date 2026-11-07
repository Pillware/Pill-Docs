<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-398"></a>

# Constant `pill_csharp_bridge::backend::MAX_COMPONENT_MANIFEST_BYTES`

```rust
pub(crate) const MAX_COMPONENT_MANIFEST_BYTES: u32 = _;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\backend.rs:93`

Upper bound for the serialized managed component manifest.

Real manifests are a few hundred bytes. The cap keeps a buggy or hostile
managed assembly from driving a multi-gigabyte host allocation.
