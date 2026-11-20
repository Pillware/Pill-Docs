<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3012"></a>

# Constant `pill_engine_core::ecs::component::DESCRIPTOR_HASH_SALT`

```rust
pub(in ecs::component) const DESCRIPTOR_HASH_SALT: u64 = 0x9e37_79b9_7f4a_7c15;
```

Visibility: `{'restricted': {'parent': 3011, 'path': '::ecs::component'}}` · Source: `engine\pill_engine_core\src\ecs\component.rs:51`

Salts that keep the two 128-bit identity variants apart when they hold the
same value.

The values are arbitrary odd constants; only the fact that they differ
matters.
