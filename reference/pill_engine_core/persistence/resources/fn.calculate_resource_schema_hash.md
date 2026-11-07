<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6434"></a>

# Function `pill_engine_core::persistence::resources::calculate_resource_schema_hash`

```rust
pub(in persistence) fn calculate_resource_schema_hash<T>() -> u64 where T: Resource + Serialize + Default;
```

Visibility: `{'restricted': {'parent': 6349, 'path': '::persistence'}}` · Source: `engine\pill_engine_core\src\persistence\resources.rs:440`

Compute the schema hash for one persistable resource type.

It works like [`calculate_schema_hash`](../registry/fn.calculate_schema_hash.md#rustdoc-item-6361) but leaves out the field-layout
fold, which has no resource counterpart: a Rust resource is not stored in a
typed column and declares no field table. A shared resource that does
declare a field layout publishes it as [`Resource::shared_schema_hash`](../../resource/trait.Resource.md#rustdoc-item-6433), and
the claim check compares that hash separately. The two hashes are
deliberately different numbers: one checks that two artifacts agree about a
layout, the other decides whether a value has to be migrated after a
rebuild.
