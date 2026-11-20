<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-461"></a>

# Procedural macro `pill_engine_macros::resource`

```rust
proc_macro resource
```

Source: `engine\pill_engine_macros\src\lib.rs:3543`

Declares an ECS resource, so the artifact declares its type without a call.

`#[resource]` expands to `#[derive(PillResource)]` plus the `#[pill(...)]`
arguments below. The value is still stored with
`world.insert_resource(..)`; only the declaration moves.

```ignore
#[resource(shared, layout_sources = ["src/frame_stats.rs"])]
#[derive(Clone)]
pub struct FrameStats { frames: u64 }

#[resource(play_state = "keep")]
pub struct EditorSession { /* ... */ }
```

## Arguments

The arguments are the derive's, passed through unchanged:

- `shared`, `shared = "prefix::Name"` - a stable identity across generations
  instead of a per-binary `TypeId`, which is what lets a reload keep the
  value.
- `layout_sources = ["..."]` - the files whose contents define the layout,
  fingerprinted so an edit that changes it rebuilds the value.
- `layout_dependencies = ["..."]` - the crates whose version can change the
  layout, as package names.
- `play_state = "keep" | "rebuild"` - what a play session does with the
  value; an unmarked resource is restored at Stop.
