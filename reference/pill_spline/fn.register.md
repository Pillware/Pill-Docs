<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1"></a>

# Function `pill_spline::register`

```rust
pub fn register(engine: &mut Engine) -> u32;
```

Source: `extensions\pill_spline\pill_spline\src\pill_spline.rs:436`

Registers the module's components against the host engine and fills the
world up to its spline count.

This is the half a reload repeats. It must be idempotent, because a first
load reaches it too, immediately before [`init`](fn.init.md#rustdoc-item-240), and a failed generation
rolls back by calling it again on the older image.

The module registers no system: it contributes a component type and the math
to sample it, leaving movement along a path to whoever owns that behaviour.

## Errors

Returns 1 when an entity cannot be created.
