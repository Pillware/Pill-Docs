<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4493"></a>

# Constant `pill_engine_core::ecs::resource::SHARED_RESOURCE_HASH_SALT`

```rust
pub(in ecs::resource) const SHARED_RESOURCE_HASH_SALT: u64 = 0xd6e8_feb8_6659_fd93;
```

Visibility: `{'restricted': {'parent': 4292, 'path': '::ecs::resource'}}` · Source: `engine\pill_engine_core\src\ecs\resource.rs:412`

Salt keeping a shared identity from colliding with a `TypeId`-derived hash
on an identical low half. Arbitrary odd constant.
