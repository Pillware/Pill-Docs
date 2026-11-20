<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1813"></a>

# Function `pill_master_renderer_data::init`

```rust
pub fn init(engine: &mut pill_engine::Engine) -> u32;
```

Source: `extensions\pill_master_renderer\modules\runtime\data\src\pill_master_renderer_data.rs:194`

The artifact's one-time entry point.

The module keeps nothing that has to run once: everything it owns is
registration, and [`register`](fn.register.md#rustdoc-item-1572) re-runs all of it on every generation. This
function exists because a statically linked build loads the module once and
calls this entry point alone, so it defers to [`register`](fn.register.md#rustdoc-item-1572).

The generated `host_module_pill_master_renderer_data` wrapper carries it as
`pill_module_init` for the host.
