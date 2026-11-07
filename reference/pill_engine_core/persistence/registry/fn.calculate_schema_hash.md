<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6361"></a>

# Function `pill_engine_core::persistence::registry::calculate_schema_hash`

```rust
pub(in persistence) fn calculate_schema_hash<T>(fields: &[crate::component_registry::ComponentFieldDescriptor]) -> u64 where T: Component + Serialize + Default + 'static;
```

Visibility: `{'restricted': {'parent': 6349, 'path': '::persistence'}}` · Source: `engine\pill_engine_core\src\persistence\registry.rs:554`

Computes the schema hash of one persistable component type.

`fields` is the declared field layout when the derive registered the type,
and empty for a hand-registered one. The layout must be part of the hash:
the normalized default value of a `Vec<f32>` and of a `Vec<String>` are
both an empty array, so without the field tags a reload could decide the
schema was unchanged and then read one as the other.
