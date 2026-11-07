<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1129"></a>

# Constant `pill_editor::runner::FPS_SMOOTHING`

```rust
pub(in runner) const FPS_SMOOTHING: f32 = 0.1;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:157`

How much of each new frame goes into the displayed FPS. The rest is the
running average, so the number moves smoothly.
