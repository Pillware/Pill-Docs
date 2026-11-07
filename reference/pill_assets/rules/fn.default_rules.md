<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-82"></a>

# Function `pill_assets::rules::default_rules`

```rust
pub fn default_rules() -> Vec<Box<dyn Rule>>;
```

Source: `assets\pill_assets\src\rules\mod.rs:26`

Returns the rules a new pipeline starts with.

Shader cooking is always on here. The renderer's data crate embeds the
cooked WGSL with `include_str!`, so the files must exist before it compiles.
A build that skipped the cook would either fail or use an old shader.
