<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-410"></a>

# Procedural macro `pill_engine_macros::system`

```rust
proc_macro system
```

Source: `engine\pill_engine_macros\src\lib.rs:2063`

Declares an ECS system, so the artifact registers it without a call.

A project or module writes only this attribute. The artifact entry point
registers every declared system before its own `register` and `init` run,
for a first load, every reload and a statically linked build alike, so the
declaration reaches every posture that compiles the artifact.

```ignore
#[system]
fn movement(query: Query<(&mut Position, &Velocity)>) { }

#[system(name = "ball_physics", order = 10)]
fn physics_system(query: Query<&mut PhysicsState>) { }

#[system(name = "rendering", post_update)]
fn rendering_system(commands: Commands) { }
```

## Arguments

- `name = "..."` - the display name logs, the editor's Systems tab and a
  hot patch use. Defaults to `module_path!()` plus the function's name, the
  same identity `#[pill_hot]` uses.
- `order = <integer>` - where this system sits among the artifact's
  declared systems: a lower value registers first, and equal values are
  ordered by name. The engine runs conflicting systems in registration
  order, so this is how a declaration states that one system must precede
  another.
- `post_update` - run in the post-update stage, after the command flush,
  like `Engine::register_post_update_system`.

An artifact can still register a system by call, in its `register` half;
such a system runs after every declared one.
