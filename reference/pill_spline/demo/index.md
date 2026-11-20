<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-367"></a>

# Module `pill_spline::demo`

Source: `extensions\pill_spline\modules\runtime\src\demo.rs:1`

The seeded demonstration path and its entity count.
The demonstration path the module seeds when it loads.

## Responsibilities

- Define [`DEMO_SPLINE_COUNT`](constant.DEMO_SPLINE_COUNT.md#rustdoc-item-365), the number of paths [`crate::register`](../fn.register.md#rustdoc-item-364)
  keeps in the world, and the points of the one it creates.

The seed exists so a host started against any project shows a spline the
moment the module loads. Registration fills up to the target count rather
than spawning a new path on every generation, so a reload keeps the entities
already created.

## Module contents

### Functions
- [`demo_spline`](fn.demo_spline.md#rustdoc-item-366) — A demonstration path used to populate the world on first load.

### Constants
- [`DEMO_SPLINE_COUNT`](constant.DEMO_SPLINE_COUNT.md#rustdoc-item-365) — Number of demo splines [`crate::register`] keeps in the world.
