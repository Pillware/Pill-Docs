<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-240"></a>

# Procedural macro `pill_engine_macros::component`

```rust
proc_macro component
```

Source: `engine\pill_engine_macros\src\lib.rs:3508`

Declares an ECS component, so the artifact registers its type without a call.

`#[component]` is the form an author writes; it expands to
`#[derive(PillComponent)]` plus the `#[pill(...)]` arguments below, and the
derive keeps `#[pill(...)]` on a field as its decorator vocabulary. Write the
attribute **above** the type's own `#[derive(...)]` list: only attributes
written below an attribute are visible to it, and the serde derives are one
of the things it looks for.

```ignore
#[component(persistable, shared)]
#[derive(Debug, Clone, Default)]
pub struct Spin { pub speed: f32 }

#[component(persistable, shared = "pill_spline::Spline", gizmo = draw_spline_gizmo)]
#[derive(Debug, Clone, Copy)]
#[repr(C)]
pub struct Spline { /* ... */ }
```

## Arguments

The arguments are the derive's, passed through unchanged:

- `persistable` - the component survives a reload through schema migration.
  The type must implement `Serialize + DeserializeOwned + Default`; this
  attribute derives only the serde half and leaves `Default` explicit.
- `shared`, `shared = "prefix::Name"` - one identity in every binary that
  links the type, `<crate>::<Type>` or pinned.
- `gizmo = <path>` - the function that draws this component's editor gizmo.
- `gizmo_when = "always" | "selected"` - when that gizmo draws; declared
  together with `gizmo`.

`Default`, `Clone`, `Copy` and `Debug` stay the author's explicit choice, as
they are with the derive.
