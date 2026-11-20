<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4726"></a>

# Module `pill_engine_core::ecs::world::change_origin`

Visibility: `{'restricted': {'parent': 4727, 'path': '::ecs::world'}}` · Source: `engine\pill_engine_core\src\ecs\world\change_origin.rs:1`

Who is changing the world, for the lifecycle methods that report it.

## Responsibilities

- Defines [`ChangeOrigin`](enum.ChangeOrigin.md#rustdoc-item-4682), the label a structural change carries while it
  is made.
- Provides `World::with_change_origin` and `Engine::with_change_origin`, the
  scopes that set it and put the previous one back.
- Translates an origin into the cause a lifecycle method reports, so the
  components never learn the editor's vocabulary.

## Design

The origin is world state, not a parameter of every structural call: the
command executors, the eager API and the scene loader all reach the same
field, and a nested scope restores what it found. The default is
[`ChangeOrigin::Simulation`](enum.ChangeOrigin.md#rustdoc-item-4675), which is what game code gets for free and what
a shipping build never changes.

A scope only labels what happens inside it. The attachment and removal
passes read the origin when they run, which is inside the scope that made
the change: the editor wraps the batch application *and* its flush, so a
command queued under `Authoring` is executed under `Authoring` too.

## Module contents

### Enums
- [`ChangeOrigin`](enum.ChangeOrigin.md#rustdoc-item-4682) — Who is changing the world.
