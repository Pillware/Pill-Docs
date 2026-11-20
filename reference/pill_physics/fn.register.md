<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-492"></a>

# Function `pill_physics::register`

```rust
pub fn register(engine: &mut Engine) -> u32;
```

Source: `extensions\pill_physics\modules\runtime\src\pill_physics.rs:109`

Declares the extension's components, settings surface and resources.

The host calls this on every generation, so every step is safe to repeat: the
component declarations are idempotent, and a value is only inserted when the
world does not already hold one. A kept manager's rapier world is rebuilt
when this image is not the one that built it; the bodies come back from the
components, which hold their pose and their last velocities.

Returns 0.
