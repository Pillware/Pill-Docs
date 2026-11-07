<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-124"></a>

# Module `pill_player::registration`

Source: `hosting\pill_player\src\registration.rs:1`

Which owner a module, the renderer or the project registers its ECS
systems under.
The owner that a module, the renderer or the project registers its ECS
systems under.

## Responsibilities

- Give each part that registers ECS systems an owner its systems are
  recorded under.
- Run an entry point with that owner set around the call.

## Design

An owner is a tag on each registered system that says what registered it:
one extension, the renderer, the project, or the engine for its own
systems. A system gets whichever owner was set while the entry point that
declared it ran. That is why the caller must set an owner around that call
([`register_module`]).

The owner decides three things: what a reload clears, what a pause
suspends, and how the editor's system list labels a row. A statically
linked build and the reloading host both take it from [`extension_owner`]
and [`renderer_owner`], so a module registers under the same owner in
either mode.

## Module contents

### Functions
- [`extension_owner`](fn.extension_owner.md#rustdoc-item-118) — Returns the owner that the extension at `index` registers its systems
- [`register_module`](fn.register_module.md#rustdoc-item-121) — Runs `init` with the owner from `scope` in effect and returns the status
- [`renderer_owner`](fn.renderer_owner.md#rustdoc-item-120) — Returns the owner that a renderer registers its systems under.

### Constants
- [`PROJECT_SCOPE`](constant.PROJECT_SCOPE.md#rustdoc-item-116) — The scope the project registers its ECS systems under: no owner set, so
