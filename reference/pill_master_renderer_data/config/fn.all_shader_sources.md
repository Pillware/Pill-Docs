<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1631"></a>

# Function `pill_master_renderer_data::config::all_shader_sources`

```rust
pub fn all_shader_sources() -> impl Iterator<Item = _>;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\mod.rs:208`

Every shader asset the renderer's own pipelines install, with its files.

The development shader reload reads this table to map an edited file back
to the assets built from it. The pipelines' `install` functions import from
their own paths, so the table could fall behind them. The test at the bottom
of this file checks every record against the shader really installed.
