<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4839"></a>

# Module `pill_engine_core::ecs::world::scripting`

Visibility: `{'restricted': {'parent': 4727, 'path': '::ecs::world'}}` · Source: `engine\pill_engine_core\src\ecs\world\scripting.rs:1`

Script components: the declared lifecycle method table and the per-frame
update pass.

## Responsibilities

- Registers a script type from its `#[script]` declaration: the component
  bit, the update adapter and the order it runs in.
- Caches the script types that implement `on_update`, sorted by
  `(order, type name)`, and rebuilds the cache only when a registration
  changes it.
- Runs `on_update` on every script of every listed type, once per frame,
  through a context that defers structural changes to the command queue.

## Design

A script component is an ordinary component first: it registers through the
same path as any other, and the script half is one table keyed by the type's
name. Each frame, dispatch asks the registry for the component's bit instead
of storing it, so a type that was removed and registered again on a new bit
is still found.

Dispatch goes through plain function pointers rather than trait objects, so
an adapter must be a non-capturing function: it cannot capture state and has
no closure environment in which to keep the raw pointers, or anything else,
after the call. The adapter is created inside the generic registration call,
so its code is compiled into the artifact that declared the script rather
than into the engine dylib. Registering a type twice replaces its entry, so
it has one adapter per lifecycle method, not two.

The adapter receives raw pointers to the world and the command queue because
the dispatch loop already borrows the archetype storage it passes in, so it
cannot lend out `&mut World` at the same time. Each pointer is valid only
for the call that receives it.

## Module contents

### Structs
- [`ScriptRegistration`](struct.ScriptRegistration.md#rustdoc-item-4815) — One registered script type.

### Type aliases
- [`ScriptCreateAdapter`](type.ScriptCreateAdapter.md#rustdoc-item-4795) — Calls `on_create` on one script row.
- [`ScriptDestroyAdapter`](type.ScriptDestroyAdapter.md#rustdoc-item-4801) — Calls `on_destroy` on one script row.
- [`ScriptStartAdapter`](type.ScriptStartAdapter.md#rustdoc-item-4797) — Calls `on_start` on one script row.
- [`ScriptStopAdapter`](type.ScriptStopAdapter.md#rustdoc-item-4799) — Calls `on_stop` on one script row.
- [`ScriptUpdateAdapter`](type.ScriptUpdateAdapter.md#rustdoc-item-4794) — Calls `on_update` on one script row.
