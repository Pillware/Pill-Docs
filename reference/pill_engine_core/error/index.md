<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4998"></a>

# Module `pill_engine_core::error`

Source: `engine\pill_engine_core\src\error.rs:1`

Typed error system for the ECS engine.
Typed errors for the ECS engine: one enum per subsystem, each variant's
message written down once, and the composed [`EngineError`](enum.EngineError.md#rustdoc-item-4612).

## Responsibilities

- Declare the engine's subsystem errors ([`WorldError`],
  [`CommandError`](enum.CommandError.md#rustdoc-item-2568), [`AddComponentError`](enum.AddComponentError.md#rustdoc-item-4673), [`RemoveComponentError`](enum.RemoveComponentError.md#rustdoc-item-4718),
  [`BuildError`](enum.BuildError.md#rustdoc-item-4767), [`PersistenceError`], [`SystemError`](enum.SystemError.md#rustdoc-item-4320) and
  [`SystemFailure`](struct.SystemFailure.md#rustdoc-item-4268)).
- Compose [`WorldError`], [`CommandError`](enum.CommandError.md#rustdoc-item-2568) and [`PersistenceError`] into
  [`EngineError`](enum.EngineError.md#rustdoc-item-4612), together with the shared host errors from `pill_core`.
  [`AddComponentError`](enum.AddComponentError.md#rustdoc-item-4673), [`RemoveComponentError`](enum.RemoveComponentError.md#rustdoc-item-4718) and [`BuildError`](enum.BuildError.md#rustdoc-item-4767) are
  returned directly by the call that raises them, and [`SystemError`](enum.SystemError.md#rustdoc-item-4320)
  travels inside [`SystemFailure`](struct.SystemFailure.md#rustdoc-item-4268) because a failing system never aborts the
  frame.

## Design

A variant that carries its own message states the wording once, in a
`#[message(...)]` attribute. The `#[engine_error]` macro turns that
definition into plain text, a diagnostic code and styled output through the
`pill_core` diagnostics runtime. These enums never import a styling crate
and never turn a source error into text; the enums that compose do it with
`?` through transparent `#[from]` wrappers.

The frame loop does not hand a frontend an [`EngineError`](enum.EngineError.md#rustdoc-item-4612):
[`Engine::process_frame`](../engine/struct.Engine.md#rustdoc-item-4330) reports
`Result<(), Vec<CommandError>>`, and
[`Engine::drain_system_failures`](../engine/struct.Engine.md#rustdoc-item-4324)
returns the collected [`SystemFailure`](struct.SystemFailure.md#rustdoc-item-4268)s. [`EngineError`](enum.EngineError.md#rustdoc-item-4612) is there for host
code that wants one error type.

## Module contents

### Structs
- [`SystemFailure`](struct.SystemFailure.md#rustdoc-item-4268) — One failed system execution recorded during a frame.

### Enums
- [`AddComponentError`](enum.AddComponentError.md#rustdoc-item-4673) — Error type for `add_component` operations.
- [`BuildError`](enum.BuildError.md#rustdoc-item-4767) — Error type for `EntityBuilder::build`.
- [`CommandError`](enum.CommandError.md#rustdoc-item-2568) — Error returned when a deferred command cannot be executed.
- [`EngineError`](enum.EngineError.md#rustdoc-item-4612) — Transparent composition of the engine errors that cross a subsystem
- [`PersistenceError`](enum.PersistenceError.md#rustdoc-item-4834) — Migration failures of persistable component columns.
- [`RemoveComponentError`](enum.RemoveComponentError.md#rustdoc-item-4718) — Error type for `remove_component` operations.
- [`SystemError`](enum.SystemError.md#rustdoc-item-4320) — Failure reported by one scheduler system during a frame.
- [`WorldError`](enum.WorldError.md#rustdoc-item-283) — Failures the archetype world reports about its own state.

### Constants
- [`COMPONENT_LAYOUT_CHANGED_REFUSAL`](constant.COMPONENT_LAYOUT_CHANGED_REFUSAL.md#rustdoc-item-4614) — The refusal logged when a reloading generation re-registers a persistable
- [`COMPONENT_NAME_COLLISION_REFUSAL`](constant.COMPONENT_NAME_COLLISION_REFUSAL.md#rustdoc-item-4613) — The refusal logged when two live registrations claim one component type
