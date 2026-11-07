<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4423"></a>

# Module `pill_engine_core::entity`

Source: `engine\pill_engine_core\src\entity.rs:1`

Lightweight entity handles with generation-based invalidation.
Lightweight entity handles with generation-based invalidation.

## Responsibilities

- Defines the [`Entity`](struct.Entity.md#rustdoc-item-669) handle type used throughout the ECS.
- Defines [`EntityId`](struct.EntityId.md#rustdoc-item-3298), the stable identity the world keeps for an
  [`Entity`](struct.Entity.md#rustdoc-item-669), for references that outlive the handle (a saved reference, a
  network message).
- Provides generation-counter logic to prevent dangling-handle bugs.
- Keeps the handle compact (16 bytes) for cheap copy and storage.

## Design

Entities are not objects: they are 64-bit slot ids paired with a 32-bit
generation counter. When an entity is destroyed, its id goes back on a
free list, and the next handle for that slot carries the next generation.
A slot that has reached the maximum generation is retired instead of
reused. Any old handle still holds the previous generation, so it fails
validation. That prevents use-after-free bugs without reference counting
or garbage collection.

A handle is therefore cheap but meaningless outside its run, because the
slot it names is reused. [`EntityId`](struct.EntityId.md#rustdoc-item-3298) is the opposite trade: it is random
and not derived from a slot, so data written for a later run can name one
entity without depending on the order the world happened to spawn them
in.

## Module contents

### Structs
- [`Entity`](struct.Entity.md#rustdoc-item-669) — A handle that names one entity in a [`World`].
- [`EntityId`](struct.EntityId.md#rustdoc-item-3298) — Stable 128-bit identity of one entity, for references that outlive a run.
