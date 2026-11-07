<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2897"></a>

# Function `pill_engine_core::component::shared_component_identity`

```rust
pub const fn shared_component_identity(name: &str) -> u128;
```

Source: `engine\pill_engine_core\src\component.rs:331`

Derives the stable 128-bit identity of a component from its declared name.

Two FNV-1a passes with different offsets, concatenated, so the 128-bit
space is actually used rather than a 64-bit hash being zero-padded into it.
