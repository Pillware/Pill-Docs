<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1718"></a>

# Function `pill_master_renderer_data::install_default_pbr_pipeline`

```rust
pub(crate) fn install_default_pbr_pipeline(world: &mut pill_engine::World);
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\pill_master_renderer_data.rs:273`

Installs [`config::pbr_pipeline`](config/pbr_pipeline/index.md#rustdoc-item-1470) and points the manager at it.

A failure is logged and not returned: a renderer that could not install the
default pipeline still runs through its own built-in chain, and the log says
what went wrong. Three failures reach here: a name clash with an asset the
project already owns, the default material's file failing to parse or load,
and one of our shaders failing to build.
