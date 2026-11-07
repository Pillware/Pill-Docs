<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2954"></a>

# Function `pill_master_renderer::surface::alpha_mode_candidates`

```rust
pub(in surface) fn alpha_mode_candidates(requested_alpha_mode: wgpu::CompositeAlphaMode) -> Vec<wgpu::CompositeAlphaMode>;
```

Visibility: `{'restricted': {'parent': 2900, 'path': '::surface'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\surface.rs:557`

The alpha modes to try, in order: the requested one, then `Opaque`.

A compositing alpha mode needs a compositing window, and a capability list
does not promise one. `Opaque` is the mode every surface must support, so
it is the fallback. When `Opaque` was requested, there is no second
candidate.
