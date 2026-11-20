<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-102"></a>

# Function `pill_spline_editor::init`

```rust
pub fn init(engine: &mut pill_engine::Engine) -> u32;
```

Source: `extensions\pill_spline\modules\editor\src\pill_spline_editor.rs:176`

The artifact's one-time entry point.

The module keeps nothing that has to run once, so this defers to
[`register`](fn.register.md#rustdoc-item-100): a statically linked build loads the module once and reaches
this alone.
