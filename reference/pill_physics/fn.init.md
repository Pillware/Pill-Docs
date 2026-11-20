<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1096"></a>

# Function `pill_physics::init`

```rust
pub fn init(_engine: &mut Engine) -> u32;
```

Source: `extensions\pill_physics\modules\runtime\src\pill_physics.rs:92`

Runs once per module image, after [`register`](fn.register.md#rustdoc-item-492), and builds nothing of its
own.

The simulation starts empty on purpose: a world's bodies belong to the
project, which spawns them. The attribute is what writes the module's entry
points, so the generated `host_module_pill_physics` wrapper can call in.

Returns 0.
