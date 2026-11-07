<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8662"></a>

# Module `pill_engine_core::world::scripting`

Visibility: `{'restricted': {'parent': 8658, 'path': '::world'}}` · Source: `engine\pill_engine_core\src\world\scripting.rs:1`

Script components: registration and per-frame dispatch.

## Responsibilities

- Registers a component type that also carries an `update` method, and
  records the per-type updater that calls it.
- Runs every script component once per frame, through a context that defers
  structural changes to the command queue.

## Design

A script component is an ordinary component first: it registers through the
same path as any other, and the script half is one table of updaters keyed by
component id. Each frame, dispatch asks the registry for the component's bit
instead of storing it, so a type that was removed and registered again on a
new bit is still found. Dispatch goes through a plain function pointer
rather than a trait object, so an updater must be a non-capturing function:
it cannot capture state and has no closure environment in which to keep the
raw pointers, or anything else, after the call. Registering a type twice
overwrites its entry, so it has one updater, not two.

The updater receives raw pointers to the world and the command queue because
the dispatch loop already borrows the archetype storage it passes in, so it
cannot lend out `&mut World` at the same time. Each pointer is valid only
for the call that receives it.

## Module contents

### Type aliases
- [`ScriptUpdater`](type.ScriptUpdater.md#rustdoc-item-8661) — Function that updates a script component.
