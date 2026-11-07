<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2698"></a>

# Function `pill_development_host::reload::stale_components`

```rust
pub(crate) fn stale_components(world: &pill_engine::World, registered_schemas: &[(String, u64)]) -> Vec<String>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\reload.rs:1169`

Returns the persistable components a subject registered whose layout has
since been replaced by another subject's reload.

Every binary that links a shared component registers it, and a reload of one
of them may change its layout. The registry accepts the new layout from a
superseding registration, and the reload migrates the rows. Every other
binary that registered the type is still built against the old layout. Its
queries are refused by the declared-schema check, and anything else its
systems do with the type, such as spawning a value, would write rows in the
old layout. An empty result means the subject has the current layout.
