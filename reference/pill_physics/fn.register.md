<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-330"></a>

# Function `pill_physics::register`

```rust
pub fn register(engine: &mut Engine) -> u32;
```

Source: `extensions\pill_physics\pill_physics\src\pill_physics.rs:104`

Declares the extension's components, settings surface and resources.

The host calls this on every generation, so every step is safe to repeat: the
component declarations are idempotent, and a value is only inserted when the
world does not already hold one - a kept manager means the bodies kept their
pose and velocity across the reload.

Returns 0.
