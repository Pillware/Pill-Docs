<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10946"></a>

# Module `pill_engine_core::systems`

Source: `engine\pill_engine_core\src\systems\mod.rs:1`

The systems group: how a function becomes a system, how the frame orders and
batches those systems, and the script lifecycle methods. Its modules keep
their old crate-root paths through the re-exports below.
How a plain function becomes a system, and how the frame runs it.

## Responsibilities

- Declare how a function's parameters are pulled from the world, so the
  function can run as a system ([`system`]).
- Order the frame's systems and decide which of them may run at the same
  time ([`scheduler`](scheduler/index.md#rustdoc-item-10356)).
- Declare the script lifecycle methods and the restricted context they run
  with ([`scripting`](scripting/index.md#rustdoc-item-10522)).

## Design

Each module keeps its old crate-root path: the crate re-exports every one of
them (`pub use systems::{scheduler, …}` in `lib.rs`), so moving a file into
this group changes no caller - not the facade's glob re-export and not a
`crate::scripting::ScriptContext` path inside the crate.

[`scripting`](scripting/index.md#rustdoc-item-10522) is the trait that declares the lifecycle methods, and the
context they run with. The dispatch that decides when a lifecycle method
runs walks a world, so it lives beside the world (the `scripting` module
under [`crate::ecs::world`](../ecs/world/index.md#rustdoc-item-4727)).

## Module contents

### Modules
- [`scheduler`](scheduler/index.md#rustdoc-item-10356) — Dependency analysis and parallel batch scheduling for system execution.
- [`scripting`](scripting/index.md#rustdoc-item-10522) — Script components: a component trait with an update step, and a context
- [`system`](system/index.md#rustdoc-item-10945) — How a plain function's parameters are pulled from the world so the function
