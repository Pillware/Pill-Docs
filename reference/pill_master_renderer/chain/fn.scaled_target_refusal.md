<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-579"></a>

# Function `pill_master_renderer::chain::scaled_target_refusal`

```rust
pub(in chain) fn scaled_target_refusal(pass: &crate::frame::ResolvedPass) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 534, 'path': '::chain'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\chain.rs:615`

Why a pass cannot write a target scaled down from the surface, or `None`
when it can.

A render pass's attachments must all be one size. The depth buffer is the
surface's, and a geometry pass writes it while a skybox reads it, so neither
can pair it with a smaller colour target. A fullscreen pass attaches no
depth buffer, so it may write a scaled target.
