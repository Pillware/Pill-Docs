<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8102"></a>

# Module `pill_engine_core::scene`

Source: `engine\pill_engine_core\src\scene\mod.rs:1`

The scene group: a world saved as one file, the references inside it, and
the startup scene a project loads first. Its modules keep their old
crate-root paths through the re-exports below.
Scenes: a world written as one file, and the references inside that file.

## Responsibilities

- Save a world's entities, components and references as one standalone
  `.scene` asset, and load it back ([`scene`](#rustdoc-item-8102)).
- Hold the saved form of a reference - a guid or a stable id, plus what a
  later run needs to find the target again ([`saved_references`](saved_references/index.md#rustdoc-item-7628)).
- Load the startup scene a project's settings name, before the project's
  own `init` fills the world ([`startup_scene`](startup_scene/index.md#rustdoc-item-8100)).

## Design

Each module keeps its old crate-root path: the crate re-exports every one of
them (`pub use scene::{saved_references, startup_scene}` in `lib.rs`), so
moving a file into this group changes no caller.

This group and the scene module inside it share a name, so the items of
[`scene`](#rustdoc-item-8102) are re-exported here as well: `crate::scene::Scene` is the path
callers have always used, and `crate::scene::scene::Scene` is the same type
by its new path.

## Module contents

### Modules
- [`saved_references`](saved_references/index.md#rustdoc-item-7628) — The saved form of asset and entity references: a guid and a stable id, plus
- [`scene`](scene/index.md#rustdoc-item-7827) — A scene: a world's entities, components and references as one standalone
- [`startup_scene`](startup_scene/index.md#rustdoc-item-8100) — The startup scene: the `.scene` a project's settings name, loaded before

## Re-exports

- [`pub use self::scene;`](scene/index.md#rustdoc-item-7827)
