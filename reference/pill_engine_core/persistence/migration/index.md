<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6353"></a>

# Module `pill_engine_core::persistence::migration`

Visibility: `{'restricted': {'parent': 6349, 'path': '::persistence'}}` · Source: `engine\pill_engine_core\src\persistence\migration.rs:1`

Selective migration: rewriting only the component types a reload changed.

## Responsibilities

- Runs the selective pass: for each changed type name, it reads the old
  value with the retiring generation's serializer and writes it back with
  the arriving generation's deserializer and inserter.
- Picks one of two strategies for each type: an in-place column swap when
  the component id is unchanged, or a full archetype move when the reload
  changed the id.
- Reports what it migrated and what it skipped, so the host can log both.

## Design

Everything here must run while the retiring generation's image is still
mapped: the serializer came from that image and is the only code that can
read the old bytes correctly.

In the in-place path, entities the incoming generation spawned during
`init` already hold values in the current layout, so those rows are read
with the current serializer while every older row goes through the
retiring one.
