<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-34"></a>

# Function `pill_test_editor::init`

```rust
pub fn init(engine: &mut pill_engine::Engine) -> u32;
```

Source: `extensions\pill_test\modules\editor\src\pill_test_editor.rs:343`

The artifact's one-time entry point.

The crate keeps nothing that has to run once: everything it owns is
registration, and [`register`](fn.register.md#rustdoc-item-32) re-runs all of it on every generation. This
function exists because a statically linked build loads the module once and
calls this entry point alone, so it defers to [`register`](fn.register.md#rustdoc-item-32).
