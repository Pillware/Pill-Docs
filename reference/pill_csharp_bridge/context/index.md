<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1030"></a>

# Module `pill_csharp_bridge::context`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\context.rs:1`

Thread-local access scope installed around one scheduled C# system.
Thread-local access scope installed around one scheduled C# system or one
startup method.

## Responsibilities

- Publish the active world, command queue, and component bindings for
  managed callbacks.
- Reject nested or out-of-scope managed invocation.
- Clear the complete thread-local scope when the invocation ends.

## Design

The raw pointers (world, command queue, access list, bindings) are kept in
one [`ActiveScopeData`] value inside a single thread-local [`Cell`]. The
reserved entities, the observed archetypes, and the invocation counter are
separate thread-locals. Installing the scope and clearing it are each one
assignment, so a panic can never leave half of the pointers installed: the
value is either fully there or not there at all.

## Module contents

### Structs
- [`ActiveScopeData`](struct.ActiveScopeData.md#rustdoc-item-1029) — One complete managed invocation scope.
- [`ActiveScopeGuard`](struct.ActiveScopeGuard.md#rustdoc-item-1073) — Keeps the thread-local invocation scope installed for exactly one managed

### Functions
- [`access_is_authorized`](fn.access_is_authorized.md#rustdoc-item-1112) — Checks whether the active system declared the requested component mode.
- [`active_scope_token`](fn.active_scope_token.md#rustdoc-item-1107) — Returns the token of the invocation active on this thread, or zero when
- [`active_world_exists`](fn.active_world_exists.md#rustdoc-item-1109) — Reports whether a managed scope exists, without dereferencing its world
- [`archetype_was_observed`](fn.archetype_was_observed.md#rustdoc-item-1113) — Returns whether a validated term has already served this archetype in the
- [`declared_access_allows`](fn.declared_access_allows.md#rustdoc-item-1116) — Returns whether the active system's declared access list allows one request.
- [`ffi_current_scope_token`](fn.ffi_current_scope_token.md#rustdoc-item-1108) — Returns [`active_scope_token`] to managed code through the engine API table.
- [`guard_managed_callback`](fn.guard_managed_callback.md#rustdoc-item-1104) — Runs one managed FFI callback and turns a panic into its failure status.
- [`native_resource_access_is_authorized`](fn.native_resource_access_is_authorized.md#rustdoc-item-1115) — The counterpart of [`resource_access_is_authorized`] for a Rust-owned
- [`record_observed_archetype`](fn.record_observed_archetype.md#rustdoc-item-1111) — Records that a validated term served an archetype to managed code during
- [`resource_access_is_authorized`](fn.resource_access_is_authorized.md#rustdoc-item-1114) — The resource counterpart of [`access_is_authorized`].
- [`with_active_command_context`](fn.with_active_command_context.md#rustdoc-item-1105) — Runs a callback with the active world, deferred command queue, component
- [`with_active_context`](fn.with_active_context.md#rustdoc-item-1110) — Runs a callback with the active world and its stable component binding
- [`with_active_world`](fn.with_active_world.md#rustdoc-item-1106) — Runs a callback with the world of the active managed invocation, returning

### Constants
- [`ACCESS_KIND_COMPONENT`](constant.ACCESS_KIND_COMPONENT.md#rustdoc-item-1024) — Marks an access entry that names a component.
- [`ACCESS_KIND_NATIVE_RESOURCE`](constant.ACCESS_KIND_NATIVE_RESOURCE.md#rustdoc-item-1026) — Marks an access entry that names a Rust-owned resource by its shared name
- [`ACCESS_KIND_RESOURCE`](constant.ACCESS_KIND_RESOURCE.md#rustdoc-item-1025) — Marks an access entry that names a resource from the managed manifest.
- [`ACTIVE_SCOPE`](constant.ACTIVE_SCOPE.md#rustdoc-item-1027) — The complete managed invocation scope for the current thread.
- [`OBSERVED_ARCHETYPES`](constant.OBSERVED_ARCHETYPES.md#rustdoc-item-1033) — Archetypes this invocation has already served to managed code.
- [`RESERVED_ENTITIES`](constant.RESERVED_ENTITIES.md#rustdoc-item-1031) — Entity handles reserved during this invocation and not yet used by a
- [`SCOPE_TOKEN`](constant.SCOPE_TOKEN.md#rustdoc-item-1035) — Counter of managed invocations on this thread, copied into every chunk.
