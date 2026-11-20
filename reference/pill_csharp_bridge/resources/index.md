<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2018"></a>

# Module `pill_csharp_bridge::resources`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\resources.rs:1`

Managed resource registration and the callback that serves resource bytes.
Managed resource registration, and the callback that hands resource bytes
to managed code.

## Responsibilities

- Register every resource a managed manifest declares as a foreign engine
  resource, and record the binding managed code reaches it through.
- Serve [`ResourceView`]s to `Res<T>` and `ResMut<T>` under the same scope
  and access-declaration rules the query callbacks follow.
- Provide the resource half of the shared reload pipeline as
  [`RESOURCE_SUBJECT`]. The stages it runs through live in
  [`manifest_apply`](../manifest_apply/index.md#rustdoc-item-992).

## Design

A managed resource is blittable bytes with a declared name, which is exactly
what [`World::register_foreign_resource`] accepts. The manifest carries
resources in the same array as components and marks each entry with a `kind`
tag, so one transfer covers both kinds.

The table of resource bindings is a process-wide `RwLock`. The component
bindings instead travel as a pointer installed for each managed invocation
([`ComponentBindings`](../components/type.ComponentBindings.md#rustdoc-item-800)). A resource
table is process-wide because a world holds one value of each resource, not
one per archetype. Keeping the table behind the lock also means the scope
struct, and every installer that fills it, stay unchanged.

The reload protocol is the components' protocol, run from one place. A
resource owns no column, so its migration moves a stored value instead of
rewriting a column. That move cannot be reversed, so the subject records no
undo for it.

## Module contents

### Structs
- [`ManagedResourceDeclaration`](struct.ManagedResourceDeclaration.md#rustdoc-item-1530) — One resource entry taken from the managed manifest.
- [`ResourceBinding`](struct.ResourceBinding.md#rustdoc-item-1914) — One managed resource, bound to its engine registration.
- [`ResourceFieldLayout`](struct.ResourceFieldLayout.md#rustdoc-item-1950) — One field of a managed resource, as the manifest describes it.

### Enums
- [`ResourceUndo`](enum.ResourceUndo.md#rustdoc-item-2029) — One applied resource entry, recorded so a later refusal can undo it.

### Functions
- [`as_layout_field`](fn.as_layout_field.md#rustdoc-item-2061) — Borrows one recorded field as the plan's layout view.
- [`binding_for_declaration`](fn.binding_for_declaration.md#rustdoc-item-2063) — Builds the table entry for one accepted declaration.
- [`bound_resource_id_and_width`](fn.bound_resource_id_and_width.md#rustdoc-item-2022) — Returns the engine id and byte width of one bound resource.
- [`execute_resource_manifest`](fn.execute_resource_manifest.md#rustdoc-item-2024) — Applies what [`prepare_resource_manifest`] resolved, then publishes the
- [`ffi_get_resource_view`](fn.ffi_get_resource_view.md#rustdoc-item-2065) — The panic-guarded entry point for [`ffi_get_resource_view_guarded`].
- [`ffi_get_resource_view_guarded`](fn.ffi_get_resource_view_guarded.md#rustdoc-item-2064) — Serves one resource's bytes to a managed `Res<T>` or `ResMut<T>`.
- [`fill_resource_view`](fn.fill_resource_view.md#rustdoc-item-2066) — Writes one resource's live bytes into the caller's view.
- [`prepare_resource_manifest`](fn.prepare_resource_manifest.md#rustdoc-item-2023) — Resolves this manifest's resource entries without touching the engine.
- [`publish_bindings`](fn.publish_bindings.md#rustdoc-item-2020) — Replaces the live table with one generation's bindings.
- [`publish_field_layout`](fn.publish_field_layout.md#rustdoc-item-2060) — Gives the engine the field layout this declaration carries.
- [`register_declared_resource`](fn.register_declared_resource.md#rustdoc-item-2057) — Registers one declared resource and opts it into snapshots.
- [`register_resource_manifest`](fn.register_resource_manifest.md#rustdoc-item-2021) — Registers every resource the managed manifest declares.
- [`relayout_declared_resource`](fn.relayout_declared_resource.md#rustdoc-item-2059) — Errors
- [`rename_resource_entry`](fn.rename_resource_entry.md#rustdoc-item-2054) — Registers the successor of a renamed resource and moves the value across.
- [`resolve_resource_access`](fn.resolve_resource_access.md#rustdoc-item-2067) — Turns one reflected resource access into scheduler metadata.
- [`resource_field_plan`](fn.resource_field_plan.md#rustdoc-item-2058) — Builds the byte plan from one resource shape to another, and applies the
- [`retire_resources`](fn.retire_resources.md#rustdoc-item-2055) — Drops the resources the manifest stopped naming.
- [`undo_resource_entry`](fn.undo_resource_entry.md#rustdoc-item-2056) — Moves a renamed resource's value back onto its predecessor, best effort.
- [`with_bindings`](fn.with_bindings.md#rustdoc-item-2019) — Runs `body` with the live table.

### Type aliases
- [`ResourceBindings`](type.ResourceBindings.md#rustdoc-item-1980) — Every managed resource, keyed by the stable identity of its full name.

### Constants
- [`RESOURCE_ACCESS_KIND`](constant.RESOURCE_ACCESS_KIND.md#rustdoc-item-2068) — The discriminator a resource access carries in the reflected list.
- [`RESOURCE_SUBJECT`](constant.RESOURCE_SUBJECT.md#rustdoc-item-2053) — The actions the shared apply pipeline needs for managed resources.

### Statics
- [`RESOURCE_BINDINGS`](static.RESOURCE_BINDINGS.md#rustdoc-item-2016) — The live table of resource bindings, shared by registration and the
