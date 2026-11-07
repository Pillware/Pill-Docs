<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2747"></a>

# Constant `pill_engine_core::component::DESCRIPTOR_HASH_SALT`

```rust
pub(in component) const DESCRIPTOR_HASH_SALT: u64 = 0x9e37_79b9_7f4a_7c15;
```

Visibility: `{'restricted': {'parent': 2746, 'path': '::component'}}` · Source: `engine\pill_engine_core\src\component.rs:51`

Salts that keep the two 128-bit identity variants apart when they hold the
same value.

The values are arbitrary odd constants; only the fact that they differ
matters.
