<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-349"></a>

# Function `pill_engine::component_registry::no_registration`

```rust
pub fn no_registration(_engine: &mut crate::Engine) -> u32;
```

Source: `engine\pill_engine\src\component_registry.rs:556`

The registration function of an artifact that declares none.

A project that keeps everything in its `init` still loads and still
registers its components through the entry point; this is what the host's
registration-only call finds in its place.
