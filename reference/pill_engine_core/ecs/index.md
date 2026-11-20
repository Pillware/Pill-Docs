<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5660"></a>

# Module `pill_engine_core::ecs`

Source: `engine\pill_engine_core\src\ecs\mod.rs:1`

The ECS group: entities, components, resources, archetypes, the world and
its queries. Its modules keep their old crate-root paths through the
re-exports below.
The ECS half of the crate: the data model every other module is built on.

## Responsibilities

- Hold the entities ([`entity`](entity/index.md#rustdoc-item-3418)), components ([`component`]), resources
  ([`resource`]) and queued commands ([`commands`](commands/index.md#rustdoc-item-2741)) a world stores.
- Hold the storage they live in: the [`archetype`](archetype/index.md#rustdoc-item-2144) columns, the [`world`](world/index.md#rustdoc-item-4727)
  that owns them, and the [`query`](query/index.md#rustdoc-item-3772) layer that reads them.
- Hold the components every world needs ([`common_components`](common_components/index.md#rustdoc-item-3009)).

## Design

Each module keeps its old crate-root path: the crate re-exports every one of
them (`pub use ecs::{archetype, …}` in `lib.rs`), so moving a file into this
group changes no caller - not the facade's glob re-export and not a
`crate::entity::Entity` path inside the crate.

## Module contents

### Modules
- [`archetype`](archetype/index.md#rustdoc-item-2144) — Archetype-based component storage with structure-of-arrays layout.
- [`commands`](commands/index.md#rustdoc-item-2741) — Deferred command queue for structural ECS mutations.
- [`common_components`](common_components/index.md#rustdoc-item-3009) — Components the engine defines because more than one consumer needs them.
- [`component`](component/index.md#rustdoc-item-3011) — Component trait, type identification, and change-detection primitives.
- [`entity`](entity/index.md#rustdoc-item-3418) — Lightweight entity handles with generation-based invalidation.
- [`query`](query/index.md#rustdoc-item-3772) — Query system for efficient iteration over entities with specific components.
- [`resource`](resource/index.md#rustdoc-item-4292) — Singleton resources stored in the [`world::World`], not attached to
- [`world`](world/index.md#rustdoc-item-4727) — Central ECS state container - entities, archetypes, components, and
