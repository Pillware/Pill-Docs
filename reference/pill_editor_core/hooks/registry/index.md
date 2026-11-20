<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5862"></a>

# Module `pill_editor_core::hooks::registry`

Source: `editor\pill_editor_core\src\hooks\registry.rs:1`

The callbacks a module registered, and their liveness markers.
The callbacks a module registered, and the marker that keeps them honest.

## Responsibilities

- Name the events a callback can answer ([`HookEvent`](enum.HookEvent.md#rustdoc-item-5131)).
- Hold each registration with the callback's erased function pointer and
  the liveness marker of the crate that registered it
  ([`HookRegistration`](struct.HookRegistration.md#rustdoc-item-6002)).
- Hand the live callbacks of one event to the drain ([`EditorHookRegistry`](struct.EditorHookRegistry.md#rustdoc-item-6073)).

## Design

The registry is a world resource of the shared `dylib`, so every editor
crate reads one identity. A registration stores owned strings and `fn`
pointers only; the executable keeps the strong
[`ModuleLiveness`](../../panels/struct.ModuleLiveness.md#rustdoc-item-6001) handle and the registry a
[`Weak`], which is the panel contract: a callback address points into the
registering image, and a strong count of zero means that image is gone.
Registering again from the same crate replaces the callback it registered
for the same event, so a reload cannot double a callback.

## Module contents

### Structs
- [`EditorHookRegistry`](struct.EditorHookRegistry.md#rustdoc-item-6073) — Every callback a module registered, live or not.
- [`FieldEditAfterHook`](struct.FieldEditAfterHook.md#rustdoc-item-5902) — A field-edit after-callback, erased to plain data.
- [`FieldEditBeforeHook`](struct.FieldEditBeforeHook.md#rustdoc-item-5864) — A field-edit before-callback, erased to plain data.
- [`HookRegistration`](struct.HookRegistration.md#rustdoc-item-6002) — One registered callback and the marker of the crate that registered it.
- [`LiveHook`](struct.LiveHook.md#rustdoc-item-5123) — One live callback, copied out of the registry for the drain.

### Enums
- [`HookCallback`](enum.HookCallback.md#rustdoc-item-5860) — The erased callback of one registration.
- [`HookEvent`](enum.HookEvent.md#rustdoc-item-5131) — One event a callback can answer.
