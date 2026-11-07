<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3666"></a>

# Function `pill_development_host::reload::registered_schemas`

```rust
pub(in reload) fn registered_schemas(world: &pill_engine::World, type_names: &[String]) -> Vec<(String, u64)>;
```

Visibility: `{'restricted': {'parent': 3428, 'path': '::reload'}}` · Source: `hosting\pill_development_host\src\reload.rs:1143`

Returns the schema hash the world records for each name in `type_names`.

Collected in the same transaction as the `init` that registered them, so a
hash that differs later means another subject's reload changed that type's
layout in between.
