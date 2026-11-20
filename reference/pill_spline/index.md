<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-391"></a>

# pill_spline API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

Extension providing spline paths.

## Responsibilities

- Declare the crate's modules and re-export the types a project, the editor
  tool and the managed mirror name.
- Register the [`Spline`](component/struct.Spline.md#rustdoc-item-8) component through the extension ABI and fill the
  world up to the demo path count ([`register`](fn.register.md#rustdoc-item-364)).
- Provide the artifact's one-time entry point ([`init`](fn.init.md#rustdoc-item-389)).

## Design

This file holds the artifact surface and nothing else: the component and its
sampling modes live in [`component`], the curve maths in [`math`](math/index.md#rustdoc-item-378), the
drawing in [`gizmo`](gizmo/index.md#rustdoc-item-369), and the seeded path in [`demo`](demo/index.md#rustdoc-item-367). Keeping the
component out of this file is what lets a suite edit one concern without
rewriting the entry points.

[`register`](fn.register.md#rustdoc-item-364) is the half a reload repeats, so it is idempotent: it fills up
to [`DEMO_SPLINE_COUNT`](demo/constant.DEMO_SPLINE_COUNT.md#rustdoc-item-365) rather than spawning a fresh path on every
generation, and a failed generation rolls back by calling it again on the
older image. [`init`](fn.init.md#rustdoc-item-389) exists because a statically linked build loads the
artifact once and calls that entry point alone, so it defers to `register`.

## Module contents

### Modules
- [`component`](component/index.md#rustdoc-item-4) — The component, its sampling modes and the mirrored entry points.
- [`demo`](demo/index.md#rustdoc-item-367) — The seeded demonstration path and its entity count.
- [`gizmo`](gizmo/index.md#rustdoc-item-369) — The curve, its control points and its tangents, drawn as editor chrome.
- [`math`](math/index.md#rustdoc-item-378) — The two curve segments a spline samples from.

### Functions
- [`init`](fn.init.md#rustdoc-item-389) — The artifact's one-time entry point.
- [`register`](fn.register.md#rustdoc-item-364) — Registers the module's components against the host engine and fills the

## Re-exports

- [`pub use component::register_component;`](component/fn.register_component.md#rustdoc-item-307)
- [`pub use component::Spline;`](component/struct.Spline.md#rustdoc-item-8)
- [`pub use component::TangentMode;`](component/enum.TangentMode.md#rustdoc-item-119)
- [`pub use component::TooManyControlPoints;`](component/struct.TooManyControlPoints.md#rustdoc-item-10)
- [`pub use component::MAX_CONTROL_POINTS;`](component/constant.MAX_CONTROL_POINTS.md#rustdoc-item-2)
- [`pub use demo::demo_spline;`](demo/fn.demo_spline.md#rustdoc-item-366)
- [`pub use demo::DEMO_SPLINE_COUNT;`](demo/constant.DEMO_SPLINE_COUNT.md#rustdoc-item-365)
- [`pub use gizmo::draw_spline_gizmo;`](gizmo/fn.draw_spline_gizmo.md#rustdoc-item-374)
- [`pub use math::catmull_rom;`](math/fn.catmull_rom.md#rustdoc-item-376)
- [`pub use math::hermite;`](math/fn.hermite.md#rustdoc-item-377)
