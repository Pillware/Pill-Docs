<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-307"></a>

# Function `pill_spline::component::register_component`

```rust
pub fn register_component(world: &mut World);
```

Source: `extensions\pill_spline\modules\runtime\src\component.rs:456`

Registers the [`Spline`](struct.Spline.md#rustdoc-item-8) component with `world`, field layout included.

The derive writes `__pill_register_Spline` as a private item, so this is the
one path a crate that links the type uses to register it alone: a test
world, or an artifact that runs no module entry point.
