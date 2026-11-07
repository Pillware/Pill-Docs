<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-97"></a>

# Function `pill_dummy_math::init`

```rust
pub fn init(engine: &mut pill_engine::Engine) -> u32;
```

Source: `extensions\pill_dummy_math\pill_dummy_math\src\pill_dummy_math.rs:73`

The artifact's one-time entry point.

The module keeps nothing that has to run once, so this function defers to
[`register`](fn.register.md#rustdoc-item-95). It exists because a statically linked build calls it directly
and because the generated `host_module_pill_dummy_math` wrapper carries it
as `pill_module_init`.
