<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6349"></a>

# Module `pill_engine_core::persistence`

Source: `engine\pill_engine_core\src\persistence\mod.rs:1`

Component persistence and schema migration for hot-reload.
Component and resource persistence across a hot reload: what each
persistable type registers, and the migration a reload runs on it.

## Responsibilities

- Stores the serialize, deserialize and insert functions of every
  persistable component type, registered alongside the component itself.
- Migrates, in place, only the component types whose schema a reload
  changed. Old and new components are matched by type name, not by
  `TypeId`, because a rebuilt image gives every type a fresh `TypeId` and
  the name is the only thing two generations agree on.
- Owns the resource snapshot, its restore path and the resource half of
  the reload migration.
- Keeps the reload bookkeeping the host compares across a swap: the
  component and resource manifests, the registration counters, and the
  records of registrations whose module is gone.

## Design

Before the swap, the reload captures the metadata of every persistable
type. After the arriving generation registers its types, only the columns
whose schema hash changed are migrated. Every other column keeps its
bytes, so a reload costs work in proportion to what changed, not to the
size of the world.

The payload is serde_json rather than a binary format because JSON is
self-describing: field names travel with the values, so an added field
takes `Default::default()` and a removed one is ignored.

Each persistable component type registers three monomorphized functions,
stored in the [`World`](../world/struct.World.md#rustdoc-item-2583) as plain `fn` pointers:

| Function | Signature | Purpose |
|----------|-----------|---------|
| `serialize_component` | `fn(&ComponentColumns, index) → Option<Vec<u8>>` | Read the component from its archetype column and encode it as JSON; `None` when the type's own `Serialize` refuses the value |
| `deserialize_component` | `fn(&[u8]) → Option<Box<dyn Component>>` | Decode JSON bytes back into a component; `None` when the bytes cannot be decoded into the type |
| `insert_boxed_component` | `fn(&mut ComponentColumns, Box<dyn Component>)` | Downcast the box and push the value into the archetype column |

They are monomorphized in the DLL that defines the concrete types, so a
reload replaces them with a plain `HashMap::insert` of the new function.
No destructor and no vtable call then runs through an image that is about
to be unmapped.

During migration, each old row of a changed column is read through the
*retiring* generation's `serialize_component`, decoded with the arriving
generation's `deserialize_component`, and placed with its
`insert_boxed_component`. Rows the arriving generation spawned during its
`init` already hold values in the new layout, so they are read with the
current serializer instead.

## Module contents

### Modules
- [`components`](components/index.md#rustdoc-item-6352) — Component-side persistence: what one persistable component type registers,
- [`migration`](migration/index.md#rustdoc-item-6353) — Selective migration: rewriting only the component types a reload changed.
- [`registry`](registry/index.md#rustdoc-item-6362) — Registration bookkeeping: what each generation registers, and how a type
- [`resources`](resources/index.md#rustdoc-item-6440) — Resource-side persistence: the snapshot shape and the per-type manifest.

## Re-exports

- [`pub use components;`](components/index.md#rustdoc-item-6352)
- [`pub use registry;`](registry/index.md#rustdoc-item-6362)
- [`pub use resources;`](resources/index.md#rustdoc-item-6440)
