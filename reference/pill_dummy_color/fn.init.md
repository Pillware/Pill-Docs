<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-162"></a>

# Function `pill_dummy_color::init`

```rust
pub fn init(engine: &mut pill_engine::Engine) -> u32;
```

Source: `extensions\pill_dummy_color\pill_dummy_color\src\pill_dummy_color.rs:149`

The artifact's one-time entry point.

The module keeps nothing that has to run once, so this function defers to
[`register`](fn.register.md#rustdoc-item-160). It exists because a statically linked build loads the module
once and calls this entry point alone, and because the generated
`host_module_pill_dummy_color` wrapper exposes it as `pill_module_init`, the
symbol the host looks up in a loaded DLL.
