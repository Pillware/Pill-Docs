<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-434"></a>

# Procedural macro `pill_engine_macros::system`

```rust
proc_macro system
```

Source: `engine\pill_engine_macros\src\lib.rs:2471`

Declares an ECS system, so the artifact registers it without a call.

A project or module writes only this attribute. The artifact entry point
registers every declared system before its own `register` and `init` run,
for a first load, every reload and a statically linked build alike, so the
declaration reaches every posture that compiles the artifact.

```ignore
#[system]
fn movement(query: Query<(&mut Position, &Velocity)>) { }

#[system(name = "spin_cube")]
fn spin_cube(query: Query<&mut TransformComponent>) { }

#[system(name = "physics", order = 900)]
fn physics_system(query: Query<&mut PhysicsState>) { }

#[system(name = "rendering", run_phase = "post_project", run_in_edit_mode = true)]
fn rendering_system(commands: Commands) { }
```

## Arguments

- `name = "..."` - the display name logs, the editor's Systems tab and a
  hot patch use. Defaults to `module_path!()` plus the function's name, the
  same identity a patch uses.
- `order = <integer>` - the sort key within the phase. The engine orders
  every system of a phase by this value across every artifact, and equal
  values keep registration order, so this is how a declaration states that
  one system must precede another. `AGENTS.md` documents the range each
  area uses.
- `run_phase = "pre_project" | "project" | "post_project"` - which phase of
  the frame the system runs in: before the first command flush, after it
  (the game's own frame work, the default), or after the second flush.
- `run_in_edit_mode = true | false` - whether the system also runs while
  the editor is editing, and while the engine is paused. `false` keeps the
  game's behaviour under Play and Stop.
- `run_if = <path>` - repeatable. A condition `fn(...) -> bool`; the system
  runs only while every one of them holds. A condition takes the same
  parameters a system does but only the read-only ones, so one that could
  write does not compile. A skipped system keeps its place in the schedule.

An artifact can still register a system by call, in its `register` half;
such a system takes its place by the same `(phase, order)`.
