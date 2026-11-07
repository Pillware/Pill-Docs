<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7209"></a>

# Function `pill_engine_core::query::target::declared_shared_schema`

```rust
pub(in query::target) fn declared_shared_schema<T: Component>() -> Option<(crate::component::ComponentId, u64)>;
```

Visibility: `{'restricted': {'parent': 7182, 'path': '::query::target'}}` · Source: `engine\pill_engine_core\src\query\target.rs:379`

Returns `T`'s component id together with the schema hash `T` declares, or
`None` when `T` is not shared or declares no layout.

This is the single-type half of [`QueryTarget::declared_shared_schemas`](trait.QueryTarget.md#rustdoc-item-7128).
