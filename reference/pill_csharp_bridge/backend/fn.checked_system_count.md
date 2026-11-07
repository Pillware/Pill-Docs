<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-680"></a>

# Function `pill_csharp_bridge::backend::checked_system_count`

```rust
pub(crate) fn checked_system_count(count: u32) -> Result<usize, pill_core::error::CSharpError>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\backend.rs:1450`

Validates a managed-reported system count before it sizes a host allocation.

`Vec::with_capacity` aborts the process when the allocation fails, so the
count is checked against [`MAX_SYSTEMS_PER_ASSEMBLY`](constant.MAX_SYSTEMS_PER_ASSEMBLY.md#rustdoc-item-402) first and refused as
a typed error instead.

## Errors

Returns [`CSharpError::SystemCountOutOfRange`] when `count` is above
[`MAX_SYSTEMS_PER_ASSEMBLY`](constant.MAX_SYSTEMS_PER_ASSEMBLY.md#rustdoc-item-402).
