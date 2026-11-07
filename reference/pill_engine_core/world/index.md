<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8658"></a>

# Module `pill_engine_core::world`

Source: `engine\pill_engine_core\src\world\mod.rs:1`

Central ECS state container - entities, archetypes, components, and
resources.
The world: the engine's central store of entities, archetypes, components
and resources.

## Responsibilities

- Declares the [`World`](struct.World.md#rustdoc-item-2583) struct: every map and counter the engine's state
  consists of, and the one place they are constructed.
- Creates and destroys entities, and hands their ids out again through a
  free list.
- Owns every archetype, including the migration that moves one entity's row
  from one archetype to another.

## Design

A component type has to be registered before it can be used, because the
world gives it a bit index that archetype masks are matched with. Destroying
an entity puts its id back on a free list with a new generation, so an old
handle cannot reach the slot's next occupant.

`World` is the API most of the engine talks to, and it has several jobs:
script dispatch, resource claims and field reflection. Each job has a file
of its own below, and each of those files adds its own `impl World`. That
split exposes nothing new, because a child module's `impl World` is the same
implementation and can reach the struct's private fields.

## Module contents

### Modules
- [`components`](components/index.md#rustdoc-item-8657) — Component registration, storage access, and per-entity attachment.
- [`reflection`](reflection/index.md#rustdoc-item-8659) — Reflection and diagnostics: what the world can say about itself.
- [`resources`](resources/index.md#rustdoc-item-8660) — Resource storage: registration, claims, foreign values and re-homing.
- [`scripting`](scripting/index.md#rustdoc-item-8662) — Script components: registration and per-frame dispatch.
- [`ticks`](ticks/index.md#rustdoc-item-8663) — Change detection: the world's tick counter and each system's baseline.

### Structs
- [`ComponentFieldLayout`](struct.ComponentFieldLayout.md#rustdoc-item-8804) — One component's list of fields, held in the two forms the world needs.
- [`EntityBuilder`](struct.EntityBuilder.md#rustdoc-item-2661) — Builds an entity by adding one component at a time.
- [`EntityLocation`](struct.EntityLocation.md#rustdoc-item-8672) — Where one entity is stored: its archetype and its row in that archetype.
- [`EntityRow`](struct.EntityRow.md#rustdoc-item-8769) — One live entity and the type names of the components attached to it.
- [`IteratorTimings`](struct.IteratorTimings.md#rustdoc-item-6840) — Timing data for parallel iterators, grouped by label and shared between
- [`SharedResourceClaim`](struct.SharedResourceClaim.md#rustdoc-item-8736) — The declaration that claimed a shared resource name.
- [`TypedComponentInserter`](struct.TypedComponentInserter.md#rustdoc-item-9112) — The [`ComponentInserter`] implementation that holds one concrete component
- [`World`](struct.World.md#rustdoc-item-2583) — Holds all entities, archetypes and resources of the ECS.

### Traits
- [`ComponentInserter`](trait.ComponentInserter.md#rustdoc-item-9108) — Type-erased way to push one component value into storage.

### Functions
- [`is_valid_foreign_layout`](fn.is_valid_foreign_layout.md#rustdoc-item-9172) — Whether a size and alignment can describe a foreign resource's allocation.
- [`per_thread_last_run_tick`](fn.per_thread_last_run_tick.md#rustdoc-item-9168) — The tick this thread's system last started at, or `None` when no parallel
- [`per_thread_this_run_tick`](fn.per_thread_this_run_tick.md#rustdoc-item-9169) — The tick the engine reserved for the system running on this thread.
- [`set_per_thread_last_run_tick`](fn.set_per_thread_last_run_tick.md#rustdoc-item-9170) — Stores this thread's last-run tick and returns the previous one, so the
- [`set_per_thread_this_run_tick`](fn.set_per_thread_this_run_tick.md#rustdoc-item-9171) — Stores the tick reserved for the system about to run on this thread and

### Constants
- [`REGISTRATION_HEADROOM_WARNING_THRESHOLD`](constant.REGISTRATION_HEADROOM_WARNING_THRESHOLD.md#rustdoc-item-8669) — Free component types left below the 128-type ceiling at which registration

## Re-exports

- [`pub use components::ColumnChunk;`](components/struct.ColumnChunk.md#rustdoc-item-8633)
- [`pub use crate::error::AddComponentError;`](../error/enum.AddComponentError.md#rustdoc-item-4673)
- [`pub use crate::error::BuildError;`](../error/enum.BuildError.md#rustdoc-item-4767)
- [`pub use crate::error::RemoveComponentError;`](../error/enum.RemoveComponentError.md#rustdoc-item-4718)
- [`pub use crate::error::WorldError;`](../error/enum.WorldError.md#rustdoc-item-283)
