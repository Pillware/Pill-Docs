<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8660"></a>

# Module `pill_engine_core::world::resources`

Visibility: `{'restricted': {'parent': 8658, 'path': '::world'}}` · Source: `engine\pill_engine_core\src\world\resources.rs:1`

Resource storage: registration, claims, foreign values and re-homing.

## Responsibilities

- Stores one value per resource type, native or foreign, and hands it out
  through `Res<T>` and `ResMut<T>`.
- Decides which type owns a shared name when two binaries both declare it,
  so the second one reads the same value instead of creating its own.
- Re-homes a live resource's function table across a reload and retires the
  claims a retiring generation leaves behind.
- Declares the asset types a generation owns, and prunes the import registry
  once a retired generation's registrations are dead.

## Design

A resource is a singleton, so it has no archetype and no row. The store is a
map from id to a box that holds the value together with plain data about its
type: a drop function, size, alignment, an optional schema hash and a
foreign flag. That data is not a trait object's vtable. Component columns
work the same way and for the same reason: the table can be re-pointed at
the newest generation, so the destructor that runs always belongs to code
that is still mapped.

A foreign resource is the same store with no Rust type behind it: plain
bytes plus a declared layout. That is what lets managed code own a resource
the host has never heard of.
