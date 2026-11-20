<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9068"></a>

# Constant `pill_engine_core::services::input::GAMEPAD_AXIS_DEADZONE`

```rust
pub const GAMEPAD_AXIS_DEADZONE: f32 = 0.05;
```

Source: `engine\pill_engine_core\src\services\input.rs:64`

Axis values closer to zero than this read as exactly zero.

Resting sticks rarely report a clean zero, and without a deadzone a
character drifts while nobody touches the pad.
