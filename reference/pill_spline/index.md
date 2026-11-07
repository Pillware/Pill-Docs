<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-242"></a>

# pill_spline API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

Extension providing spline paths.

## Responsibilities

- Defines the [`Spline`](struct.Spline.md#rustdoc-item-6) component: an ordered set of control points.
- Samples a position anywhere along that path with [`Spline::get_location_at`](struct.Spline.md#rustdoc-item-123).
- Registers the component through the extension ABI when loaded.

## Design

The curve is a uniform Catmull-Rom spline. It passes exactly through every
control point, which is what makes a hand-placed path behave the way it
looks in an editor. The first and last control points also serve as the
outer neighbours of the end segments, so the curve starts and ends exactly
on them instead of overshooting past them.

Control points live in a fixed-size array rather than a `Vec`. That keeps
the component plain data across the module boundary: one library never
allocates memory another has to free, and `#[repr(C)]` gives every copy of
the type the same field layout. A project that depends on the crate and the
module DLL the host loads hold separate copies of the type;
`#[pill(shared)]` on [`Spline`](struct.Spline.md#rustdoc-item-6) is what makes them one component.

Registration lives in [`register`](fn.register.md#rustdoc-item-1), a plain Rust function, so the crate can
also be linked statically.

## Module contents

### Structs
- [`OmoMO`](struct.OmoMO.md#rustdoc-item-184) — Two coordinates and a handful of mirrored methods: the value type the C#
- [`Spline`](struct.Spline.md#rustdoc-item-6) — A path through an ordered set of control points.
- [`TooManyControlPoints`](struct.TooManyControlPoints.md#rustdoc-item-8) — More control points than a [`Spline`] can hold.

### Functions
- [`__pill_register_Spline`](fn.__pill_register_Spline.md#rustdoc-item-180) — Registers this component into the world; used by the artifact-wide
- [`catmull_rom`](fn.catmull_rom.md#rustdoc-item-238) — Evaluate one Catmull-Rom segment between `start` and `end`.
- [`demo_spline`](fn.demo_spline.md#rustdoc-item-239) — A demonstration path used to populate the world on first load.
- [`init`](fn.init.md#rustdoc-item-240) — The artifact's one-time entry point.
- [`register`](fn.register.md#rustdoc-item-1) — Registers the module's components against the host engine and fills the

### Constants
- [`DEMO_SPLINE_COUNT`](constant.DEMO_SPLINE_COUNT.md#rustdoc-item-2) — Number of demo splines [`register`] keeps in the world.
- [`MAX_CONTROL_POINTS`](constant.MAX_CONTROL_POINTS.md#rustdoc-item-0) — Maximum number of control points one spline can hold.
- [`SAMPLE_VERTICAL_OFFSET`](constant.SAMPLE_VERTICAL_OFFSET.md#rustdoc-item-3) — Extra vertical offset added to every position sampled from a curve segment.
