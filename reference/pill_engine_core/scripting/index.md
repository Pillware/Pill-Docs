<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8097"></a>

# Module `pill_engine_core::scripting`

Source: `engine\pill_engine_core\src\scripting.rs:1`

Script components: a component trait with an update step, and a context
that defers structural changes until it is safe to apply them.
Script components that change the world only through deferred commands.

## Responsibilities

- Defines [`ScriptComponent`](trait.ScriptComponent.md#rustdoc-item-8136) - a component trait with an `update()` method.
- Provides [`ScriptContext`](struct.ScriptContext.md#rustdoc-item-8100) - a restricted view of the ECS that queues
  every structural change.

## Design

A script gets a [`ScriptContext`](struct.ScriptContext.md#rustdoc-item-8100), never the [`crate::Engine`](../engine/struct.Engine.md#rustdoc-item-2) itself. The
context has no way to add or remove a component, or to destroy an entity,
except by queueing the command. So a script cannot move its own row out of
the storage its `&mut self` points into, which would leave that reference
dangling.

## Module contents

### Structs
- [`ScriptContext`](struct.ScriptContext.md#rustdoc-item-8100) — A restricted view of the ECS for script components.

### Traits
- [`ScriptComponent`](trait.ScriptComponent.md#rustdoc-item-8136) — A component that runs its own update logic every frame.
