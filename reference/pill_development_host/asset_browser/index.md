<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4460"></a>

# Module `pill_development_host::asset_browser`

Visibility: `crate` · Source: `hosting\pill_development_host\src\asset_browser.rs:1`

The project's assets as a tool sees them: the tree listing, import settings
and moves.
The project's assets as an editor or another tool sees them: the `res`
tree, plus each file's asset type, load state and guid.

## Responsibilities

- List the project's `res` and every module root as a tree ([`list_assets`]):
  the `.meta` sidecars are hidden, and every file carries its type, load
  state and guid.
- Read and save an asset's import settings as JSON, or a standalone asset's
  own document ([`asset_settings`], [`save_asset_settings`]), and move an
  asset together with its `.meta` ([`move_asset`]).
- Create a standalone asset from its type's default document, checking the
  name and the folder here instead of in a UI ([`create_standalone_asset`]).
- Refuse every path outside `res`. A module's resources are listed read-only,
  and the write functions change only the project's own `res`.

## Design

Nothing in this module names an asset type. Every asset type is handled
through the world's [`ImportRegistry`](pill_engine::ImportRegistry), so a
type that a module registers later is listed and edited without a change
here or in the editor. Each call imports at most once: saving writes the
file (and imports a sourced asset whose `.meta` is still missing), and a
move renames files. The dev host's asset watcher then sees the change - or
follows the move - and reimports at the next frame boundary, just as it
does for an edit made in another program.

## Module contents

### Structs
- [`AssetEntry`](struct.AssetEntry.md#rustdoc-item-3937) — One row of an asset tree listing.
- [`StandaloneType`](struct.StandaloneType.md#rustdoc-item-3942) — A standalone asset type that a new file can be created for.

### Functions
- [`append_root`](fn.append_root.md#rustdoc-item-4544) — Walks one root and pushes its entries, naming the root and marking whether
- [`asset_settings`](fn.asset_settings.md#rustdoc-item-4548) — Returns the import settings of the asset at `path` as JSON, or the
- [`create_standalone_asset`](fn.create_standalone_asset.md#rustdoc-item-3943) — Creates a new standalone asset of `type_name` called `name` in `folder`
- [`list_assets`](fn.list_assets.md#rustdoc-item-4543) — Lists every folder and file under `asset_directory`, depth first: folders
- [`move_asset`](fn.move_asset.md#rustdoc-item-4552) — Moves the asset at `from` to `to` (both relative to `res`) together with
- [`read_guid`](fn.read_guid.md#rustdoc-item-4546) — Returns the `guid` field of the JSON asset header stored in `path`, if the
- [`replace_atomically`](fn.replace_atomically.md#rustdoc-item-4550) — Writes `bytes` to a temporary sibling of `target_file`, then renames it over
- [`save_asset_settings`](fn.save_asset_settings.md#rustdoc-item-4549) — Saves `settings` as the import settings of the asset at `path`, or as a
- [`slash_path`](fn.slash_path.md#rustdoc-item-4547) — Returns `path` as a string with `/` separators.
- [`standalone_types`](fn.standalone_types.md#rustdoc-item-4553) — Returns the live standalone types, sorted by display name: the list a
- [`visit`](fn.visit.md#rustdoc-item-4545) — Walks `directory/relative` recursively and calls `visit_entry(relative,

### Constants
- [`METADATA_SUFFIX`](constant.METADATA_SUFFIX.md#rustdoc-item-4459) — The suffix of a metadata sidecar.

## Re-exports

- `pub use pill_engine::asset_metadata::checked_relative;`
- `pub use pill_engine::asset_metadata::standalone_file_name;`
