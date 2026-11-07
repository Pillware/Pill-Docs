<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-95"></a>

# Function `pill_dummy_math::register`

```rust
pub fn register(_engine: &mut pill_engine::Engine) -> u32;
```

Source: `extensions\pill_dummy_math\pill_dummy_math\src\pill_dummy_math.rs:62`

Registers the module against the host engine and returns zero.

This is the half a reload repeats. The module adds nothing to the engine, so
the call does nothing; it exists so every in-repo artifact answers the same
contract. A second run must leave the engine as the first one found it.
