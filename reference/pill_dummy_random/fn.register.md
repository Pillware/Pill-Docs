<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-92"></a>

# Function `pill_dummy_random::register`

```rust
pub fn register(_engine: &mut pill_engine::Engine) -> u32;
```

Source: `extensions\pill_dummy_random\pill_dummy_random\src\pill_dummy_random.rs:71`

Registers the module against the host engine. Returns zero on success.

This is the half a reload repeats. The module adds nothing to the engine, so
the call does nothing; it exists so every in-repo artifact answers the same
contract. A second call must leave the engine in the same state.
