<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-948"></a>

# Function `pill_master_renderer_data::assets::shader::slots_by_name`

```rust
pub fn slots_by_name<S: SlotName, impl IntoIterator<Item = S>: IntoIterator<Item = _>>(shader_name: &str, declared: &'static str, slots: impl IntoIterator<Item = _>) -> indexmap::IndexMap<String, S>;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\shader.rs:474`

Key a list of slots by the names they carry, keeping the list's order.

The shader stores its slots this way: a name says which slot, and the order
stays the order the source declares, which is the order a parameter's value
packs into the uniform buffer.

A name declared twice keeps its first declaration and logs a warning naming
the later one. Keeping both would give the uniform buffer more slots than
the shader declares.

`declared` names the slot kind in that warning - "parameter" or "texture".
