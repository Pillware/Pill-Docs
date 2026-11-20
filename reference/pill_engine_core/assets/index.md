<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2016"></a>

# Module `pill_engine_core::assets`

Source: `engine\pill_engine_core\src\assets\mod.rs:1`

Many-per-type asset storage addressed by generational handle.

The counterpart to [`resource`] for data a world holds several of - meshes,
textures, materials - where the type alone does not name one value. The
store is itself a resource, so it reaches systems through the `Res` /
`ResMut` parameters.

The asset pipeline as a whole - the database, the file formats, the loader
and where bytes come from - lives with it in the [`assets`](#rustdoc-item-2016) group.
The asset pipeline: what an asset is, where its bytes come from, and how a
later run finds it again.

## Responsibilities

- Hold the asset trait, the generational handle that names one, and the
  manager that stores live assets ([`storage`]).
- Hold every asset of a project by guid and by path ([`database`]).
- Read and write the files an asset is saved in: the YAML document format
  ([`document`]), the `.meta` sidecar beside a source file ([`metadata`])
  and the standalone asset file with no source ([`standalone`]).
- Resolve a path to bytes through mounted packs and the filesystem
  ([`store`]), and load by path from game code ([`loading`]).
- Import by file extension when the type is unknown ([`import_registry`]),
  and save a reference to an asset that outlives the run ([`reference`]).

## Design

Each module keeps its old crate-root path: the crate re-exports every one of
them (`pub use assets::{storage as asset, …}` in `lib.rs`), so moving a file
into this group changes no caller - not the facade's glob re-export and not
a `crate::asset_store::read` path inside the crate.

The files are named after the part of the pipeline they own, not after the
`asset_` prefix every one of them carried at the crate root: `storage` is
the store of live assets, `store` is where bytes come from.

## Module contents

### Modules
- [`database`](database/index.md#rustdoc-item-336) — Every asset of a project by guid and by path, loaded or not.
- [`document`](document/index.md#rustdoc-item-410) — The YAML document format every asset file shares.
- [`import_registry`](import_registry/index.md#rustdoc-item-425) — Importing assets by file extension, for code that does not know their type.
- [`loading`](loading/index.md#rustdoc-item-983) — Loading assets and scenes from game code by path.
- [`metadata`](metadata/index.md#rustdoc-item-988) — Metadata files beside an asset's source (`<source_file>.meta`).
- [`reference`](reference/index.md#rustdoc-item-1301) — Saved references to assets, by guid, that point at the asset in a later
- [`standalone`](standalone/index.md#rustdoc-item-1369) — Assets stored as their own file in `res`, with no source file.
- [`storage`](storage/index.md#rustdoc-item-1503) — Many-per-type asset storage addressed by generational handle.
- [`store`](store/index.md#rustdoc-item-1779) — Where an asset's bytes come from: mounted packs and the filesystem.
