<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3138"></a>

# Function `pill_master_renderer::register`

```rust
pub fn register(_engine: &mut pill_engine::Engine) -> u32;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\lib.rs:132`

The registration half: declares nothing itself and returns zero.

This is the half a reload repeats. The post-update `rendering` system needs
no call of its own: [`frame::rendering_system`](frame/fn.rendering_system.md#rustdoc-item-244) declares itself, so the
engine registers it under the module's own owner before this function runs,
and the next generation registers its own after the reload removed the
previous one.

Registers no data: `pill_master_renderer_data`'s own `register` declares the
components, asset types, resources and default pipeline before this module
loads, and doing it here would point the asset types' tables at this image,
which reloads most often.
