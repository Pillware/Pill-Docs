<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-402"></a>

# Constant `pill_csharp_bridge::backend::MAX_SYSTEMS_PER_ASSEMBLY`

```rust
pub(crate) const MAX_SYSTEMS_PER_ASSEMBLY: u32 = 4096;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\backend.rs:106`

Upper bound on the number of systems one managed assembly may report.

The count is used to reserve the startup snapshot before any system has
been read, so it needs the same kind of bound as the manifest lengths above.
No real project comes near 4,096 systems.
