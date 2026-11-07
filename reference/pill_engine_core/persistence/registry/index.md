<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6362"></a>

# Module `pill_engine_core::persistence::registry`

Visibility: `{'restricted': {'parent': 6349, 'path': '::persistence'}}` · Source: `engine\pill_engine_core\src\persistence\registry.rs:1`

Registration bookkeeping: what each generation registers, and how a type
that no generation registers any more is dropped and forgotten.

## Responsibilities

- Answers what this generation registers: the persistable type manifest
  and the sequence markers the host captures before a module's `init`.
- Enumerates what one `init` registered afterwards, by name and by id, so
  a type a reloaded module dropped is detected instead of orphaned.
- Forgets registrations whose owner is gone: drops their columns and
  releases their bits, keeping name-keyed entries only while a surviving
  registration still claims the name.

## Design

After several reloads the registry can hold one entry per generation for
the same type name, each with its own `TypeId`, so the forget paths find
entries by name and retire every id they find. A bit is released only when
no archetype still maps it: an archetype's mask is also its id, so a bit
reused while live rows still reference it would make two component sets
share one column.

## Module contents

### Functions
- [`calculate_schema_hash`](fn.calculate_schema_hash.md#rustdoc-item-6361) — Computes the schema hash of one persistable component type.
- [`merge_json`](fn.merge_json.md#rustdoc-item-6359) — Deep-merges two JSON values: `base_json` provides the defaults and
- [`normalize_schema_shape`](fn.normalize_schema_shape.md#rustdoc-item-6360) — Builds a copy of a JSON tree in which every value is replaced by a marker

### Type aliases
- [`DeserializeComponentFn`](type.DeserializeComponentFn.md#rustdoc-item-6355) — Rebuilds a heap-allocated component from JSON bytes.
- [`InsertComponentFn`](type.InsertComponentFn.md#rustdoc-item-6356) — Downcasts a `Box<dyn Component>` to its concrete type and pushes the value
- [`RestoreResourceFn`](type.RestoreResourceFn.md#rustdoc-item-6358) — Rebuilds one resource from snapshot bytes and inserts it into the world.
- [`SerializeComponentFn`](type.SerializeComponentFn.md#rustdoc-item-6354) — Serializes the component at `index` in the given storage map into JSON
- [`SerializeResourceFn`](type.SerializeResourceFn.md#rustdoc-item-6357) — Serializes one registered resource out of the world into JSON bytes.
