<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-94"></a>

# Function `pill_dummy_random::init`

```rust
pub fn init(engine: &mut pill_engine::Engine) -> u32;
```

Source: `extensions\pill_dummy_random\pill_dummy_random\src\pill_dummy_random.rs:82`

The artifact's one-time entry point.

The module keeps nothing that has to run once, so this function defers to
[`register`](fn.register.md#rustdoc-item-92). It exists because a statically linked build calls it directly
and because the generated `host_module_pill_dummy_random` wrapper carries it
as `pill_module_init`.
