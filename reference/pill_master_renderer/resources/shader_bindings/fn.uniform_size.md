<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2849"></a>

# Function `pill_master_renderer::resources::shader_bindings::uniform_size`

```rust
pub(crate) fn uniform_size(parameter_slots: &indexmap::IndexMap<String, crate::assets::ShaderParameterSlot>) -> usize;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\shader_bindings.rs:52`

The byte size of the uniform buffer a shader's parameter slots need.

Each slot is one 16-byte region, aligned to `vec4` in WGSL, so the size is
the slot count times 16. A material and a pass both take their buffer size
from here, through [`shader_bind_groups`](fn.shader_bind_groups.md#rustdoc-item-2848), so the two cannot disagree about
what the shader expects.
