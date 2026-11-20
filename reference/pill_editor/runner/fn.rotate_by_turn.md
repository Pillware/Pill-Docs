<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1830"></a>

# Function `pill_editor::runner::rotate_by_turn`

```rust
pub(in runner) fn rotate_by_turn(turn: [f32; 4], rotation: [f32; 4]) -> [f32; 4];
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4201`

The Hamilton product of two `[x, y, z, w]` quaternions.

A drag composes its turn onto the orientation the object had at the press,
so the order matters: the turn applies first.
