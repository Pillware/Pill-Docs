<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6440"></a>

# Module `pill_engine_core::persistence::resources`

Visibility: `{'restricted': {'parent': 6349, 'path': '::persistence'}}` · Source: `engine\pill_engine_core\src\persistence\resources.rs:1`

Resource-side persistence: the snapshot shape and the per-type manifest.

## Responsibilities

- Defines [`ResourceSnapshot`](struct.ResourceSnapshot.md#rustdoc-item-6365), the flat `(name, payload)` capture of
  resource values, and [`PersistResourceManifestEntry`](struct.PersistResourceManifestEntry.md#rustdoc-item-6405), the registration
  view the reload transaction compares across the swap.
- Owns the resource restore path: a Rust resource's payload goes back
  through the restore function registered for its name, and a foreign
  resource's bytes are stored as they are.
- Runs the resource half of the reload migration: reads a reshaped value
  through the retiring generation's serializer and writes it back through
  the arriving one.

## Design

A resource is a singleton, so unlike components there is no entity to group
by, and the snapshot is a flat list sorted by name. Sorting makes a snapshot
reproducible: hash-map order is not, and a snapshot that differs between two
identical runs cannot be diffed, compared or used as a test fixture.

## Module contents

### Structs
- [`PersistResourceManifestEntry`](struct.PersistResourceManifestEntry.md#rustdoc-item-6405) — One persistable resource registration, as the reload transaction sees it.
- [`ResourceSnapshot`](struct.ResourceSnapshot.md#rustdoc-item-6365) — Resource values captured at one point in time.

### Functions
- [`calculate_resource_schema_hash`](fn.calculate_resource_schema_hash.md#rustdoc-item-6434) — Compute the schema hash for one persistable resource type.
- [`decode_foreign_resource_payload`](fn.decode_foreign_resource_payload.md#rustdoc-item-6439) — Decode the byte array [`serialize_foreign_resource`] wrote.
- [`restore_resource`](fn.restore_resource.md#rustdoc-item-6436) — Rebuild resource `T` from JSON and insert it into the world.
- [`serialize_foreign_resource`](fn.serialize_foreign_resource.md#rustdoc-item-6437) — Encode a foreign resource's payload as a JSON array of byte values.
- [`serialize_resource`](fn.serialize_resource.md#rustdoc-item-6435) — Serialize the live value of resource `T` as JSON.
