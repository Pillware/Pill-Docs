<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1583"></a>

# Constant `pill_editor::runner::GIZMO_HIT_RADIUS_DEFAULT`

```rust
pub(in runner) const GIZMO_HIT_RADIUS_DEFAULT: f32 = preferences::GIZMO_HIT_RADIUS_DEFAULT;
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:226`

The default radius around a handle that the hover test uses, as a fraction
of the handle length. It is about as wide as the line the overlay draws.
The preferences' `editor.gizmo_hit_radius` overrides it, and the hover and
the press both read the one value.
