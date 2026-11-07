<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8659"></a>

# Module `pill_engine_core::world::reflection`

Visibility: `{'restricted': {'parent': 8658, 'path': '::world'}}` · Source: `engine\pill_engine_core\src\world\reflection.rs:1`

Reflection and diagnostics: what the world can say about itself.

## Responsibilities

- Answers the field-layout questions an editor asks: which fields a
  component or resource declares, and where each one sits in a row.
- Enumerates the world for a tool rather than for a system: the entities
  that exist, the component names attached to each, and which types are
  registered at all.
- Prints the archetype list, builds a Graphviz DOT description of the
  archetype graph, and estimates the world's memory for telemetry.

## Design

Most of these methods only read the world, and they identify components and
resources by name or id rather than by type, because the callers are tools
(the editor, the managed side) that never hold the Rust type. A name is
also the one identity that survives a reload: a tool keeps names between
generations and resolves the ids again in each new one.
