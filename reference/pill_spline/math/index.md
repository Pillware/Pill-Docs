<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-378"></a>

# Module `pill_spline::math`

Source: `extensions\pill_spline\modules\runtime\src\math.rs:1`

The two curve segments a spline samples from.
The two curve segments a spline samples from.

## Responsibilities

- Evaluate one Catmull-Rom segment ([`catmull_rom`](fn.catmull_rom.md#rustdoc-item-376)) and one cubic Hermite
  segment ([`hermite`](fn.hermite.md#rustdoc-item-377)).

Both functions are pure: they take points and a local parameter and return a
position, so the sampling modes in [`crate::component`] differ only in which
one they call.

## Module contents

### Functions
- [`catmull_rom`](fn.catmull_rom.md#rustdoc-item-376) — Evaluate one Catmull-Rom segment between `start` and `end`.
- [`hermite`](fn.hermite.md#rustdoc-item-377) — Evaluate one cubic Hermite segment from `start` to `end`.
