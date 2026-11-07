<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-580"></a>

# Function `pill_master_renderer::chain::shaderless_target_refusal`

```rust
pub(in chain) fn shaderless_target_refusal(pass: &crate::frame::ResolvedPass) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 534, 'path': '::chain'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\chain.rs:637`

Why a pass with no shader of its own cannot draw into `pass`'s targets, or
`None` when it can.

A geometry pass without a shader draws through each material's pipeline, and
those pipelines are built for the surface's formats. A target that is not
the surface would be recorded against the wrong format, so the pass is
refused while the chain is built, instead of every draw failing.
