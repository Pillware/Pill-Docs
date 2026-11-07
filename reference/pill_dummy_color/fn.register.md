<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-160"></a>

# Function `pill_dummy_color::register`

```rust
pub fn register(_engine: &mut pill_engine::Engine) -> u32;
```

Source: `extensions\pill_dummy_color\pill_dummy_color\src\pill_dummy_color.rs:137`

Registers the module with the host engine and returns zero on success.

This is the half a reload repeats. The module adds nothing to the engine -
its Mirrored declarations are compile-time registries - so the call does
nothing, and it exists so every in-repo artifact answers the same contract.

It must be idempotent: the host calls it on every generation, and when it
returns a non-zero status the host keeps the previous library.
