<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4292"></a>

# Module `pill_engine_core::ecs::resource`

Source: `engine\pill_engine_core\src\ecs\resource.rs:1`

Singleton resources stored in the [`world::World`](../world/struct.World.md#rustdoc-item-2848), not attached to
entities.
Singleton resources stored in the [`World`], not attached to entities.

## Responsibilities

- Defines the [`Resource`] marker trait for global/shared state types.
- Provides [`ResourceId`], which names a resource type and stays the same
  across artifacts when the type declares a shared name.
- Implements [`ResHandle`] - a lightweight, copyable handle for deferred resource access.
- Owns [`ErasedResource`], the storage one resource value lives in.

## Design

A resource holds global state: time, input, configuration, an asset store.
Systems reach it through `Res<T>` (read-only) and `ResMut<T>` (read and
write) parameters, and [`ResHandle<T>`] is a zero-cost typed handle that
can be stored and passed around without borrowing the [`World`].

## Examples

```no_run
# use pill_engine::*;
# let mut world = World::new();
#[derive(Debug)]
struct ProjectTime { delta_seconds: f32, elapsed_seconds: f32 }
impl Resource for ProjectTime {}
world.insert_resource(ProjectTime { delta_seconds: 0.016, elapsed_seconds: 0.0 });

// A handle is cheap and copyable.
let handle = ResHandle::<ProjectTime>::new();
let time = handle.get(&world).unwrap();

// Systems take the same resource through Res/ResMut.
fn my_system(time: Res<ProjectTime>) {
    println!("Elapsed: {}", time.get().unwrap().elapsed_seconds);
}
```

## Module contents

### Structs
- [`CloneResourceProbe`](struct.CloneResourceProbe.md#rustdoc-item-4409) — Lets a generic insert path record a resource's cloning function when the
- [`ErasedResource`](struct.ErasedResource.md#rustdoc-item-4298) — One resource value, stored without a trait object.
- [`ErasedResourceOps`](struct.ErasedResourceOps.md#rustdoc-item-4547) — Everything an [`ErasedResource`] needs to know about its value's type, as
- [`KeptLayoutDeclaration`](struct.KeptLayoutDeclaration.md#rustdoc-item-4583) — What a resource type declared about the files and crates that define its
- [`ResHandle`](struct.ResHandle.md#rustdoc-item-4495) — A cheap, typed handle to a resource in the [`World`].
- [`RestoreEpoch`](struct.RestoreEpoch.md#rustdoc-item-4306) — A play session's Stop counter, published as a resource.

### Enums
- [`PlayState`](enum.PlayState.md#rustdoc-item-393) — What the editor's play mode does with a resource at Play and Stop.
- [`ResourceId`](enum.ResourceId.md#rustdoc-item-4447) — Identifies one resource type.

### Traits
- [`RecordResourceClone`](trait.RecordResourceClone.md#rustdoc-item-4407) — Answers with a copy of the value when the probed type implements `Clone`.
- [`Resource`](trait.Resource.md#rustdoc-item-395) — Marks a type as a resource: one value of it lives in the [`World`].
- [`SkipResourceClone`](trait.SkipResourceClone.md#rustdoc-item-4408) — The fallback for a resource without `Clone`: reports that it cannot copy,

### Functions
- [`drop_in_place_of`](fn.drop_in_place_of.md#rustdoc-item-4622) — Drop the `T` at `ptr`.
- [`drop_nothing`](fn.drop_nothing.md#rustdoc-item-4623) — Drop nothing.

### Constants
- [`SHARED_RESOURCE_HASH_SALT`](constant.SHARED_RESOURCE_HASH_SALT.md#rustdoc-item-4493) — Salt keeping a shared identity from colliding with a `TypeId`-derived hash
