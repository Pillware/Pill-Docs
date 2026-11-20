<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6922"></a>

# Module `pill_engine_core::hot_reload::persistence::components`

Visibility: `{'restricted': {'parent': 5453, 'path': '::hot_reload::persistence'}}` · Source: `engine\pill_engine_core\src\hot_reload\persistence\components.rs:1`

Component-side persistence: what one persistable component type registers,
and what a reload compares to decide which types to migrate.

## Responsibilities

- Defines [`PersistTypeMetadata`](struct.PersistTypeMetadata.md#rustdoc-item-5459) and [`PersistTypeManifestEntry`](struct.PersistTypeManifestEntry.md#rustdoc-item-5483), which
  the reload transaction compares before and after the swap to decide which
  component types need migrating.
- Registers the per-type serialize, deserialize and insert functions that
  selective migration reads and writes rows through.

## Design

Deserializers and schema hashes are keyed by type name, not by `TypeId`: a
rebuilt image gives every type a fresh `TypeId` for the same name, and the
name is the only thing two generations agree on. Serializers and inserters
are keyed by `ComponentId`, which the migration resolves from the name
first. Registration removes a superseded generation's entries, so a name
always resolves to one live registration.

## Module contents

### Structs
- [`PersistTypeManifestEntry`](struct.PersistTypeManifestEntry.md#rustdoc-item-5483) — Lightweight manifest entry for the persistable component types registered
- [`PersistTypeMetadata`](struct.PersistTypeMetadata.md#rustdoc-item-5459) — One persistable component type's registration, as the reload sees it.
- [`SelectiveMigrationReport`](struct.SelectiveMigrationReport.md#rustdoc-item-5460) — What selective migration did.
- [`SkippedType`](struct.SkippedType.md#rustdoc-item-6859) — One component type the selective pass could not migrate.

### Functions
- [`deserialize_component`](fn.deserialize_component.md#rustdoc-item-6920) — Deserialize JSON bytes into a heap-allocated component.
- [`insert_boxed_component`](fn.insert_boxed_component.md#rustdoc-item-6921) — Downcast and push a boxed component into the concrete column.
- [`serialize_component`](fn.serialize_component.md#rustdoc-item-6919) — Serialize the component at `index` from storage into JSON bytes.
