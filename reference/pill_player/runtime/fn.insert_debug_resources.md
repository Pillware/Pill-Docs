<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-549"></a>

# Function `pill_player::runtime::insert_debug_resources`

```rust
pub fn insert_debug_resources(world: &mut pill_engine::World, debug_draw_enabled: bool);
```

Source: `hosting\pill_player\src\runtime.rs:631`

Insert the debug-drawing and picking resources into `world`, each only
where it is missing.

Every build has them: debug drawing on in the development host, and in a
shipping or web build as its project settings say. A system toggles it at
runtime through [`pill_engine::DebugDraw::set_enabled`].
