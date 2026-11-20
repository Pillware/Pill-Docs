<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6113"></a>

# Module `pill_editor_core::hooks::requests`

Source: `editor\pill_editor_core\src\hooks\requests.rs:1`

The queue a module registers its callbacks through.
The queue a module registers its callbacks through.

## Responsibilities

- Define the plain request a module queues ([`HookRequest`](struct.HookRequest.md#rustdoc-item-6117)) and the
  resource the executable drains ([`EditorHookRequests`](struct.EditorHookRequests.md#rustdoc-item-6167)).
- Provide the typed constructors an `_editor` crate calls
  ([`FieldEditHookRequest`](struct.FieldEditHookRequest.md#rustdoc-item-6116)).

## Design

A request is taken once and never read twice, so a request from a module
that has unloaded cannot reach a live entry. The typed constructors
monomorphize their adapter in the calling crate, which is what keeps the
callback address inside the registering image: the executable binds the
request to that image's liveness marker and drops both together.

## Module contents

### Structs
- [`EditorHookRequests`](struct.EditorHookRequests.md#rustdoc-item-6167) — The callback requests queued since the executable last looked.
- [`FieldEditHookRequest`](struct.FieldEditHookRequest.md#rustdoc-item-6116) — The typed field-edit constructors an `_editor` crate calls.
- [`HookRequest`](struct.HookRequest.md#rustdoc-item-6117) — One callback a module asks the editor to register.
