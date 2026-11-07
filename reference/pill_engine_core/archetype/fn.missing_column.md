<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-708"></a>

# Function `pill_engine_core::archetype::missing_column`

```rust
pub(in archetype) fn missing_column<T: Component>() -> never;
```

Visibility: `{'restricted': {'parent': 110, 'path': '::archetype'}}` · Source: `engine\pill_engine_core\src\archetype.rs:2105`

Reports a lookup for a column the archetype does not have.

It is a separate function so the panic path stays out of the accessors'
inlined fast path. `#[cold]` marks it as unlikely, so the branch predictor
expects the other way.
