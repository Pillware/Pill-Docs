<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-121"></a>

# Function `pill_test::init`

```rust
pub fn init(engine: &mut Engine) -> u32;
```

Source: `extensions\pill_test\pill_test\src\pill_test.rs:152`

The artifact's one-time entry point.

The module keeps nothing that has to run once: everything it owns is
registration, and [`register`](fn.register.md#rustdoc-item-3) re-runs all of it on every generation. This
function exists because a statically linked build loads the module once and
calls this entry point alone, so it defers to [`register`](fn.register.md#rustdoc-item-3).

Component registration happens automatically from the `PillComponent`
derive before either entry point runs. Public so the generated
`host_module_pill_test` wrapper can export it as `pill_module_init`.
