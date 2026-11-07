<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1107"></a>

# Function `pill_core::metrics::install_metrics`

```rust
pub fn install_metrics() -> bool;
```

Source: `engine\pill_core\src\metrics.rs:259`

Installs the engine metrics recorder process-wide.

Returns `true` when the recorder was installed and `false` when another
recorder was already installed, which then stays in place.
