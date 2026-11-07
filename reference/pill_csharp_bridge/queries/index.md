<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1872"></a>

# Module `pill_csharp_bridge::queries`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\queries.rs:1`

Native callbacks used by C# query enumerators.
Native callbacks used by C# query enumerators.

## Responsibilities

- Return validated component chunks to managed query iterators.
- Return entity columns and live entity counts during scheduled systems.
- Enforce the active system's declared read/write access.

## Design

Each `ffi_*` function is an `extern "C"` entry point that C# query iterators
and scheduled systems call across the host/managed boundary. Access checks
go through [`access_is_authorized`], and world and binding lookups go
through [`with_active_context`] and [`with_active_world`]. When no managed
system is active, every callback answers status code `3` instead of serving
data.

Pointers returned in [`ComponentChunk`] stay owned by the active world's
archetype and are valid only while the managed invocation runs. Entity rows
arrive in `ComponentChunk::entities`, a const slot. The archetype-scoped
path serves them only for an archetype this invocation has already received
a chunk for, so it cannot be used to probe arbitrary archetypes.

## Module contents

### Functions
- [`ffi_entity_count`](fn.ffi_entity_count.md#rustdoc-item-1883) — Panic-guarded entry point for [`ffi_entity_count_guarded`].
- [`ffi_entity_count_guarded`](fn.ffi_entity_count_guarded.md#rustdoc-item-1882) — Write the current entity count while a managed system is active.
- [`ffi_entity_stable_id`](fn.ffi_entity_stable_id.md#rustdoc-item-1885) — Panic-guarded entry point for [`ffi_entity_stable_id_guarded`].
- [`ffi_entity_stable_id_guarded`](fn.ffi_entity_stable_id_guarded.md#rustdoc-item-1884) — Write a live entity's stable id, split into two `u64` halves.
- [`ffi_get_archetype_chunk`](fn.ffi_get_archetype_chunk.md#rustdoc-item-1879) — Panic-guarded entry point for [`ffi_get_archetype_chunk_guarded`].
- [`ffi_get_archetype_chunk_guarded`](fn.ffi_get_archetype_chunk_guarded.md#rustdoc-item-1878) — Return one component chunk of an archetype the managed enumerator already
- [`ffi_get_component_chunk`](fn.ffi_get_component_chunk.md#rustdoc-item-1877) — Panic-guarded entry point for [`ffi_get_component_chunk_guarded`].
- [`ffi_get_component_chunk_guarded`](fn.ffi_get_component_chunk_guarded.md#rustdoc-item-1876) — Return a component chunk to managed code after checking the system's
- [`ffi_get_entity_chunk`](fn.ffi_get_entity_chunk.md#rustdoc-item-1881) — Panic-guarded entry point for [`ffi_get_entity_chunk_guarded`].
- [`ffi_get_entity_chunk_guarded`](fn.ffi_get_entity_chunk_guarded.md#rustdoc-item-1880) — Return the entity column of the archetype at `chunk_index`.
- [`module_binding_matches_live_column`](fn.module_binding_matches_live_column.md#rustdoc-item-1875) — Whether a module's native binding still matches the live column's layout.
- [`record_served_archetype`](fn.record_served_archetype.md#rustdoc-item-1871) — Record the archetype of a chunk a validated term just served.
- [`write_component_chunk`](fn.write_component_chunk.md#rustdoc-item-1873) — Write one component column chunk into the managed caller's output buffer.
- [`write_entity_chunk`](fn.write_entity_chunk.md#rustdoc-item-1874) — Write one archetype's entity column chunk into the managed caller's output
