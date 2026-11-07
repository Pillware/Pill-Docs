<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3140"></a>

# Function `pill_master_renderer::init`

```rust
pub fn init(engine: &mut pill_engine::Engine) -> u32;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\lib.rs:144`

The artifact's one-time entry point: nothing is one-time here.

Everything the module owns is registration that [`register`](fn.register.md#rustdoc-item-3138) repeats on
every generation. This function exists because a host that links the crate
statically loads it once and calls this entry point alone, and because the
generated `host_module_*` wrapper carries it as `pill_module_init` by
expanding `__pill_module_entry_points!`.
