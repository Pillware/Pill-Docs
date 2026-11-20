<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10522"></a>

# Module `pill_engine_core::systems::scripting`

Source: `engine\pill_engine_core\src\systems\scripting.rs:1`

Script components: a component trait with an update step, and a context
that defers structural changes until it is safe to apply them.
Script components, their lifecycle methods and the declaration behind them.

## Responsibilities

- Defines [`ScriptComponent`] - the five lifecycle methods the engine calls,
  and the information each one receives about why it ran.
- Defines [`ScriptDeclaration`] and [`ScriptDeclarationData`], what
  `#[script]` reads from an implementation block.
- Provides [`ScriptContext`] - a restricted view of the ECS that queues
  every structural change.

## Design

A script gets a [`ScriptContext`], never the [`crate::Engine`](../../engine/struct.Engine.md#rustdoc-item-2) itself. The
context has no way to add or remove a component, or to destroy an entity,
except by queueing the command. So a script cannot move its own row out of
the storage its `&mut self` points into, which would leave that reference
dangling.

A script declares its lifecycle methods instead of announcing them at
registration: `#[script]` on the implementation block reads which lifecycle
methods the block defines, each lifecycle method's `#[order(n)]`, and
whether the script also runs while editing, and writes them into
[`ScriptDeclaration::DECLARATION`]. The world reads that value once per
registration, so a reload points every lifecycle method at the arriving
image.

Every lifecycle method has a no-op default, so a script implements only the
ones it needs. The engine calls `on_create` when the component starts
existing, `on_start` when the script starts running, `on_update` once per
frame while it runs, `on_stop` when it stops running, and `on_destroy` when
the component stops existing.

## Module contents

### Structs
- [`CreateInfo`](struct.CreateInfo.md#rustdoc-item-4796) — Everything [`ScriptComponent::on_create`] is told about why it ran.
- [`DestroyInfo`](struct.DestroyInfo.md#rustdoc-item-4802) — Everything [`ScriptComponent::on_destroy`] is told about why it ran.
- [`ScriptContext`](struct.ScriptContext.md#rustdoc-item-4793) — A restricted view of the ECS for script components.
- [`StartInfo`](struct.StartInfo.md#rustdoc-item-4798) — Everything [`ScriptComponent::on_start`] is told about why it ran.
- [`StopInfo`](struct.StopInfo.md#rustdoc-item-4800) — Everything [`ScriptComponent::on_stop`] is told about why it ran.

### Enums
- [`CreateCause`](enum.CreateCause.md#rustdoc-item-4684) — What made a script component start existing.
- [`DestroyCause`](enum.DestroyCause.md#rustdoc-item-4687) — What made a script component stop existing.
- [`StartCause`](enum.StartCause.md#rustdoc-item-4763) — What made a script start running.
- [`StopCause`](enum.StopCause.md#rustdoc-item-10715) — What made a script stop running.

### Traits
- [`ScriptComponent`](trait.ScriptComponent.md#rustdoc-item-5398) — A component the engine runs as a script, with a lifecycle method for each
