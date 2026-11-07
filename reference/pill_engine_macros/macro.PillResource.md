<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-411"></a>

# Procedural macro `pill_engine_macros::PillResource`

```rust
proc_macro PillResource
```

Source: `engine\pill_engine_macros\src\lib.rs:2197`

Declares an ECS resource, so the artifact declares its type without a call.

A project or module writes only this derive. The artifact entry point
declares every derived type before its own `register` and `init` run, for a
first load, every reload and a statically linked build alike, so the
declaration reaches every posture that compiles the artifact. The value is
still stored by `world.insert_resource(..)`, exactly as before; only the
declaration call moves.

```ignore
#[derive(PillResource)]
pub struct FrameStats { frames: u64 }

#[derive(PillResource)]
#[pill(shared, layout_sources = ["src/frame_stats.rs"])]
pub struct FrameStats { frames: u64 }

#[derive(PillResource)]
#[pill(manager)]
pub struct AudioManager { /* ... */ }
```

## Arguments

- `shared` - give the type a stable identity instead of a per-binary
  `TypeId`, which is what lets a reload keep the value instead of retiring
  it. On its own the name is derived from `module_path!()`; `shared =
  "..."` pins it, and must be namespaced for the same reason
  `PillComponent`'s must be.
- `layout_sources = ["..."]` - the files whose contents define the type's
  layout. The development host fingerprints them, so an edit that changes
  the layout rebuilds the value instead of keeping bytes that no longer
  mean what they did.
- `layout_dependencies = ["..."]` - the crates whose resolved version can
  change the type's layout, as package names.

A manager resource declares itself with
`World::register_settings_asset_manager` in its crate's `register` instead:
the settings surface holds function pointers into the image that declared
it, so every generation re-points them.
