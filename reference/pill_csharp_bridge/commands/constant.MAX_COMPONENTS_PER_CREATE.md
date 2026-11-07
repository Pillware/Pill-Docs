<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-688"></a>

# Constant `pill_csharp_bridge::commands::MAX_COMPONENTS_PER_CREATE`

```rust
pub(crate) const MAX_COMPONENTS_PER_CREATE: u32 = 1024;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\commands.rs:42`

Maximum number of component blobs one managed create may carry.

This bound is part of the ABI contract: the `queue_create` entry point
refuses a larger count, so managed code must keep its creates at or below
it.
