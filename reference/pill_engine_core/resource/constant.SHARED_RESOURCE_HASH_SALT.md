<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7305"></a>

# Constant `pill_engine_core::resource::SHARED_RESOURCE_HASH_SALT`

```rust
pub(in resource) const SHARED_RESOURCE_HASH_SALT: u64 = 0xd6e8_feb8_6659_fd93;
```

Visibility: `{'restricted': {'parent': 1162, 'path': '::resource'}}` · Source: `engine\pill_engine_core\src\resource.rs:250`

Salt keeping a shared identity from colliding with a `TypeId`-derived hash
on an identical low half. Arbitrary odd constant.
