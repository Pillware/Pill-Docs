<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6551"></a>

# Module `pill_engine_core::error`

Source: `engine\pill_engine_core\src\error.rs:1`

Typed error system for the ECS engine.
Typed errors for the ECS engine: one enum per subsystem, each variant's
message written down once, and the composed [`EngineError`](enum.EngineError.md#rustdoc-item-6186).

## Responsibilities

- Declare the engine's subsystem errors ([`WorldError`],
  [`CommandError`](enum.CommandError.md#rustdoc-item-2833), [`AddComponentError`](enum.AddComponentError.md#rustdoc-item-4997), [`RemoveComponentError`](enum.RemoveComponentError.md#rustdoc-item-5001),
  [`BuildError`](enum.BuildError.md#rustdoc-item-4999), [`PersistenceError`], [`SystemError`](enum.SystemError.md#rustdoc-item-6033) and
  [`SystemFailure`](struct.SystemFailure.md#rustdoc-item-5972)).
- Compose [`WorldError`], [`CommandError`](enum.CommandError.md#rustdoc-item-2833) and [`PersistenceError`] into
  [`EngineError`](enum.EngineError.md#rustdoc-item-6186), together with the shared host errors from `pill_core`.
  [`AddComponentError`](enum.AddComponentError.md#rustdoc-item-4997), [`RemoveComponentError`](enum.RemoveComponentError.md#rustdoc-item-5001) and [`BuildError`](enum.BuildError.md#rustdoc-item-4999) are
  returned directly by the call that raises them, and [`SystemError`](enum.SystemError.md#rustdoc-item-6033)
  travels inside [`SystemFailure`](struct.SystemFailure.md#rustdoc-item-5972) because a failing system never aborts the
  frame.

## Design

A variant that carries its own message states the wording once, in a
`#[message(...)]` attribute. The `#[engine_error]` macro turns that
definition into plain text, a diagnostic code and styled output through the
`pill_core` diagnostics runtime. These enums never import a styling crate
and never turn a source error into text; the enums that compose do it with
`?` through transparent `#[from]` wrappers.

The frame loop does not hand a frontend an [`EngineError`](enum.EngineError.md#rustdoc-item-6186):
[`Engine::process_frame`](../engine/struct.Engine.md#rustdoc-item-5392) reports
`Result<(), Vec<CommandError>>`, and
[`Engine::drain_system_failures`](../engine/struct.Engine.md#rustdoc-item-6039)
returns the collected [`SystemFailure`](struct.SystemFailure.md#rustdoc-item-5972)s. [`EngineError`](enum.EngineError.md#rustdoc-item-6186) is there for host
code that wants one error type.

## Module contents

### Structs
- [`SystemFailure`](struct.SystemFailure.md#rustdoc-item-5972) — One failed system execution recorded during a frame.

### Enums
- [`AddComponentError`](enum.AddComponentError.md#rustdoc-item-4997) — Error type for `add_component` operations.
- [`BuildError`](enum.BuildError.md#rustdoc-item-4999) — Error type for `EntityBuilder::build`.
- [`CommandError`](enum.CommandError.md#rustdoc-item-2833) — Error returned when a deferred command cannot be executed.
- [`EngineError`](enum.EngineError.md#rustdoc-item-6186) — Transparent composition of the engine errors that cross a subsystem
- [`PersistenceError`](enum.PersistenceError.md#rustdoc-item-5467) — Migration failures of persistable component columns.
- [`RemoveComponentError`](enum.RemoveComponentError.md#rustdoc-item-5001) — Error type for `remove_component` operations.
- [`SystemError`](enum.SystemError.md#rustdoc-item-6033) — Failure reported by one scheduler system during a frame.
- [`WorldError`](enum.WorldError.md#rustdoc-item-2305) — Failures the archetype world reports about its own state.

### Constants
- [`COMPONENT_LAYOUT_CHANGED_REFUSAL`](constant.COMPONENT_LAYOUT_CHANGED_REFUSAL.md#rustdoc-item-6188) — The refusal logged when a reloading generation re-registers a persistable
- [`COMPONENT_NAME_COLLISION_REFUSAL`](constant.COMPONENT_NAME_COLLISION_REFUSAL.md#rustdoc-item-6187) — The refusal logged when two live registrations claim one component type
