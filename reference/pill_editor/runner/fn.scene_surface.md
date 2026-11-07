<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1257"></a>

# Function `pill_editor::runner::scene_surface`

```rust
pub(in runner) fn scene_surface(view: usize) -> pill_player::SurfaceId;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3283`

The scene views' surface ids: view `n` draws through surface `n + 1`, so
each view keeps its surface however many views the person opens. Surface
0 is the renderer's primary, which the game window carries.
