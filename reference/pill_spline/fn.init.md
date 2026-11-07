<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-240"></a>

# Function `pill_spline::init`

```rust
pub fn init(engine: &mut Engine) -> u32;
```

Source: `extensions\pill_spline\pill_spline\src\pill_spline.rs:485`

The artifact's one-time entry point.

The module keeps nothing that has to run once: everything it owns is
registration, and [`register`](fn.register.md#rustdoc-item-1) re-runs all of it on every generation. This
function exists because a statically linked build loads the module once and
calls this entry point alone, so it defers to [`register`](fn.register.md#rustdoc-item-1).

Public so the generated `host_module_pill_spline` wrapper can carry it as
`pill_module_init` for the host to find in a loaded DLL.
