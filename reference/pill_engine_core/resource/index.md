<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1162"></a>

# Module `pill_engine_core::resource`

Source: `engine\pill_engine_core\src\resource.rs:1`

Singleton resources stored in the [`World`](../world/struct.World.md#rustdoc-item-2583), not attached to entities.
Singleton resources stored in the [`World`](../world/struct.World.md#rustdoc-item-2583), not attached to entities.

## Responsibilities

- Defines the [`Resource`](trait.Resource.md#rustdoc-item-715) marker trait for global/shared state types.
- Provides [`ResourceId`](enum.ResourceId.md#rustdoc-item-4505), which names a resource type and stays the same
  across artifacts when the type declares a shared name.
- Implements [`ResHandle`](struct.ResHandle.md#rustdoc-item-7307) - a lightweight, copyable handle for deferred resource access.
- Owns [`ErasedResource`], the storage one resource value lives in.

## Design

A resource holds global state: time, input, configuration, an asset store.
Systems reach it through `Res<T>` (read-only) and `ResMut<T>` (read and
write) parameters, and [`ResHandle<T>`](struct.ResHandle.md#rustdoc-item-7307) is a zero-cost typed handle that
can be stored and passed around without borrowing the [`World`](../world/struct.World.md#rustdoc-item-2583).

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
- [`ErasedResource`](struct.ErasedResource.md#rustdoc-item-6438) — One resource value, stored without a trait object.
- [`ErasedResourceOps`](struct.ErasedResourceOps.md#rustdoc-item-7359) — Everything an [`ErasedResource`] needs to know about its value's type, as
- [`KeptLayoutDeclaration`](struct.KeptLayoutDeclaration.md#rustdoc-item-7395) — What a resource type declared about the files and crates that define its
- [`ResHandle`](struct.ResHandle.md#rustdoc-item-7307) — A cheap, typed handle to a resource in the [`World`].

### Enums
- [`ResourceId`](enum.ResourceId.md#rustdoc-item-4505) — Identifies one resource type.

### Traits
- [`Resource`](trait.Resource.md#rustdoc-item-715) — Marks a type as a resource: one value of it lives in the [`World`].

### Functions
- [`drop_in_place_of`](fn.drop_in_place_of.md#rustdoc-item-7433) — Drop the `T` at `ptr`.
- [`drop_nothing`](fn.drop_nothing.md#rustdoc-item-7434) — Drop nothing.

### Constants
- [`SHARED_RESOURCE_HASH_SALT`](constant.SHARED_RESOURCE_HASH_SALT.md#rustdoc-item-7305) — Salt keeping a shared identity from colliding with a `TypeId`-derived hash
