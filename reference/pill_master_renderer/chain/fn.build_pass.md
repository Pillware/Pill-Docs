<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-578"></a>

# Function `pill_master_renderer::chain::build_pass`

```rust
pub(in chain) fn build_pass(pass: &crate::frame::ResolvedPass, shaders_by_key: &std::collections::HashMap<u64, &crate::assets::Shader>, defined_targets: &std::collections::HashSet<String>, context: &ChainContext<'_>) -> PassSlot;
```

Visibility: `{'restricted': {'parent': 531, 'path': '::chain'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\chain.rs:658`

One pass's GPU object, or the reason there is none.

`defined_targets` is what earlier passes of the chain declared so far, and
the pass may only read those. `context` is what the renderer provides for
building GPU objects.
