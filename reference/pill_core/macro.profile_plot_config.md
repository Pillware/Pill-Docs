<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2123"></a>

# Macro `pill_core::profile_plot_config`

```rust
macro_rules! profile_plot_config {
    ($name:ident, $config:expr) => { ... };
}
```

Source: `engine\pill_core\src\profiling.rs:1195`

Configures how a plot appears in the Tracy profiler UI.
Only active under `profiling`.

```ignore
use tracy_client::{PlotConfiguration, PlotFormat};
profile_plot_config!(entity_count, PlotConfiguration::default()
    .format(PlotFormat::Number));
```
