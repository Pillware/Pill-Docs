<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2726"></a>

# Function `pill_engine_core::ecs::archetype::missing_column`

```rust
pub(in ecs::archetype) fn missing_column<T: Component>() -> never;
```

Visibility: `{'restricted': {'parent': 2144, 'path': '::ecs::archetype'}}` · Source: `engine\pill_engine_core\src\ecs\archetype.rs:2120`

Reports a lookup for a column the archetype does not have.

It is a separate function so the panic path stays out of the accessors'
inlined fast path. `#[cold]` marks it as unlikely, so the branch predictor
expects the other way.
