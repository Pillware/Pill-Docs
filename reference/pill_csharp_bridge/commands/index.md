<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-697"></a>

# Module `pill_csharp_bridge::commands`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\commands.rs:1`

Native callbacks that translate C# lifecycle requests into deferred ECS commands.
Native callbacks that turn C# entity requests into deferred ECS commands.

## Responsibilities

- Reserve generation-checked entity handles for managed callers.
- Decode managed component blobs into native adders or descriptor bytes.
- Queue create, destroy, add, and remove commands against the active
  world, rejecting stale entity handles, components with no registered
  binding, and calls from a system that declared no command access.

## Design

Every callback runs inside [`with_active_command_context`], which passes
the closure the active world, the command queue, the component binding
table, and the set of entity handles reserved during this invocation. Each
blob is decoded through its [`ComponentBinding`] into a
[`DecodedCommandComponent`] before it reaches the queue: a byte adder for a
native component, plain bytes for a descriptor component. Managed code
therefore never names a concrete Rust type.

## Module contents

### Enums
- [`DecodedCommandComponent`](enum.DecodedCommandComponent.md#rustdoc-item-696) — One component blob, decoded into a form the command queue accepts.

### Functions
- [`command_scope_error`](fn.command_scope_error.md#rustdoc-item-721) — Return the status code for a callback that could not enter the command
- [`decode_command_component`](fn.decode_command_component.md#rustdoc-item-724) — Check one component blob and copy it into the form the command queue takes
- [`ffi_queue_add_component`](fn.ffi_queue_add_component.md#rustdoc-item-730) — Panic-guarded entry point for [`ffi_queue_add_component_guarded`].
- [`ffi_queue_add_component_guarded`](fn.ffi_queue_add_component_guarded.md#rustdoc-item-729) — Queue adding one component, selected by its stable managed identity.
- [`ffi_queue_create`](fn.ffi_queue_create.md#rustdoc-item-726) — Panic-guarded entry point for [`ffi_queue_create_guarded`].
- [`ffi_queue_create_guarded`](fn.ffi_queue_create_guarded.md#rustdoc-item-725) — Queue entity creation, after checking every supplied component blob.
- [`ffi_queue_destroy`](fn.ffi_queue_destroy.md#rustdoc-item-728) — Panic-guarded entry point for [`ffi_queue_destroy_guarded`].
- [`ffi_queue_destroy_guarded`](fn.ffi_queue_destroy_guarded.md#rustdoc-item-727) — Queue destroying an entity, but only while its handle is still live.
- [`ffi_queue_remove_component`](fn.ffi_queue_remove_component.md#rustdoc-item-732) — Panic-guarded entry point for [`ffi_queue_remove_component_guarded`].
- [`ffi_queue_remove_component_guarded`](fn.ffi_queue_remove_component_guarded.md#rustdoc-item-731) — Queue removing one component, named by its stable managed identity.
- [`ffi_reserve_entity`](fn.ffi_reserve_entity.md#rustdoc-item-723) — Panic-guarded entry point for [`ffi_reserve_entity_guarded`].
- [`ffi_reserve_entity_guarded`](fn.ffi_reserve_entity_guarded.md#rustdoc-item-722) — Reserve a generation-checked entity handle without inserting the entity

### Constants
- [`MAX_COMPONENTS_PER_CREATE`](constant.MAX_COMPONENTS_PER_CREATE.md#rustdoc-item-688) — Maximum number of component blobs one managed create may carry.
