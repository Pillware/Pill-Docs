<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-681"></a>

# Function `pill_csharp_bridge::backend::checked_access_count`

```rust
pub(crate) fn checked_access_count(count: u32) -> Result<usize, pill_core::error::CSharpError>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\backend.rs:1467`

Validates a managed-reported access count the same way; see
[`checked_system_count`](fn.checked_system_count.md#rustdoc-item-680).

## Errors

Returns [`CSharpError::SystemCountOutOfRange`] when `count` is above
[`MAX_ACCESSES_PER_SYSTEM`](constant.MAX_ACCESSES_PER_SYSTEM.md#rustdoc-item-403).
