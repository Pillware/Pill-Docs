# Assets: how they are implemented

## Summary

All assets live in one resource, the `AssetManager`, which keeps one packed column per asset type plus slot bookkeeping that turns a small `Handle<T>` (slot index + generation) into a row. Files are found through mounted packs and directories, and each file's identity is a **guid** stored in its `.meta` file or its own header. Scenes save that guid, never the handle.

This is the implementation counterpart of [concepts/assets.md](../concepts/assets.md). Read that first for how to load and use assets.

## At a glance

| Piece                 | What it is                                                                                      | Where                      |
| --------------------- | ----------------------------------------------------------------------------------------------- | -------------------------- |
| `Asset` trait         | `Send + Sync + 'static`, optional `shared_name`                                                 | `asset.rs`                 |
| `Handle<T>`           | `index: u32` + `generation: u32`, `#[repr(C)]`, `Copy`; `Handle::INVALID` is both at `u32::MAX` | `asset.rs`                 |
| `AssetManager`        | a shared resource holding every asset column and its bookkeeping                                | `asset.rs`                 |
| `AssetColumn`         | per-type slot generations, slot ↔ row maps, free slots, name and guid indexes, content versions | `asset.rs`                 |
| `AssetGuid`           | random 128-bit identity of one asset, stored on disk                                            | `asset.rs`                 |
| `ImportedAsset`       | an asset decoded from a source file, with import settings and source extensions                 | `asset_metadata.rs`        |
| `.meta` file          | a JSON sidecar beside a source file: header (format, type, guid) + import settings              | `asset_metadata.rs`        |
| `StandaloneAsset`     | an asset stored as its own document (`.material`, `.scene`)                                     | `asset_standalone.rs`      |
| `ImportRegistry`      | extension → type-erased import functions, for code that only has a path                         | `asset_import_registry.rs` |
| `AssetDatabase`       | guid ↔ path index of every asset on disk, loaded or not                                         | `asset_database.rs`        |
| asset store           | where a path's bytes come from: packs first, then directories                                   | `asset_store.rs`           |
| `SavedAssetReference` | guid + path hint, the form a scene file stores                                                  | `saved_references.rs`      |

```
 Handle<Mesh> { index: 2, generation: 5 }
        │
        ▼  AssetColumn for Mesh
 generations[2] == 5 ?  ── no ──► None  (stale handle)
        │ yes
 slot_rows[2] = 0   and   row_slots[0] == 2 ?
        │ yes
        ▼  packed Mesh column
 rows: [ rock, tree, crate ]
          ▲ row 0
```

## Why are assets not resources or components?

Because there are many values per type, and none belongs to one entity.

- A **resource** is one value per type, found by type alone. There are hundreds of meshes, so the type does not say which one you mean.
- A **component** belongs to one entity. A mesh is used by many entities at once.

So assets get their own store, addressed by handle. The store itself is a resource with the shared name `pill_engine::asset::AssetManager`. That gives three things for free:

- every module and the C# runtime reach the same store;
- ECS systems get it through `Res<AssetManager>` and `ResMut<AssetManager>`;
- the scheduler's resource-conflict rules already cover it.

The cost is that access is coarse: an ECS system with `ResMut<AssetManager>` conflicts with every ECS system that reads any asset, so it never runs in parallel with them.

## How does a handle find its asset?

Through the slot, not the row.

Each asset type's column is **packed**: rows have no gaps. Removing an asset moves the last row into the hole, so a row number is not stable. A handle therefore addresses a **slot**, and the `AssetColumn` keeps two maps between slots and rows:

- `slot_rows[slot]` is the row a slot's asset is in;
- `row_slots[row]` is the slot that owns a row.

`get(handle)` checks three things:

1. the slot's generation equals the handle's generation;
2. `slot_rows[index]` gives a row;
3. `row_slots[row]` points back at the same slot.

Only then does it read the row. The back-pointer check means even a handle that guessed a freed slot's generation cannot reach another asset's row.

> **Example:** the `Mesh` column holds `rock` (slot 0, row 0), `tree` (slot 1, row 1) and `crate` (slot 2, row 2). Removing `tree` moves `crate` into row 1, so `slot_rows[2] = 1` and `row_slots[1] = 2`. Slot 1's generation goes up by one and slot 1 is put on the free list. The handle to `crate` still says slot 2 and still works. The old handle to `tree` now has the wrong generation and returns `None`.

When a generation would pass `u32::MAX`, the slot is retired instead of reused, for the same reason as entity slots (see [entities.md](entities.md#what-happens-when-a-generation-reaches-its-maximum)).

## What does adding an asset do?

`AssetManager::add(asset)`:

1. calls `register::<T>()`, which creates the column the first time and refreshes its function table every time;
2. takes a free slot, or appends a new one with generation 0;
3. pushes the value as a new row at the end of the column and links the slot and row both ways;
4. bumps the store's `revision`;
5. returns `Handle { index: slot, generation }`.

`add_named`, `add_with_guid` and `add_named_with_guid` do the same and also bind the name or guid in that type's indexes. A name or guid that a live asset already holds is refused, not silently moved.

`get_mut` bumps both the store's `revision` and that one slot's **content version**. The renderer compares content versions to re-upload only the assets that were actually borrowed mutably, instead of every asset whenever anything changed.

## How are asset types identified across modules?

The column's key is a `TypeId`, chosen so that shared types reach one column:

| Asset type         | Column key                                                                                            |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| no shared name     | `TypeId::of::<T>()` in the calling DLL                                                                |
| with `shared_name` | the `TypeId` of the **first** DLL that registered it, recorded in `shared_keys` under the name's hash |

For a shared type, a later registration from another DLL finds the same key through `shared_keys`, and is checked against the column's recorded size and alignment. A mismatch is an `assert!`, so the registering entry point panics (on a reload, the module's registration) and the reload is rolled back before any row is read with the wrong layout.

All of the renderer's asset types (`Mesh`, `Texture`, `Shader`, `Material`, `RenderPass`, `RenderingPipeline`) are shared, which is why the project and the renderer see the same assets.

## Why does each column have a function table, and what happens on reload?

For the same reason component columns do: the values outlive the code that created them.

Each column is an `ErasedVecStorage` whose drop and move functions are a replaceable table (`ErasedVecStorageOps`), not a vtable. `register::<T>()` stores a **refresher** for the column's key: a function, compiled into the registering DLL, that rebuilds the table from that DLL's `T`. During a reload, `World::rehome_assets` calls `AssetManager::rehome`, which runs every refresher, so each column's table points into the newest DLL that registered it. `World::rehome_assets` is compiled only with the engine's `development` feature: a shipping build never swaps the code behind a live column.

What this means when a reload changes things:

| Change                                                 | Result                                                                                                                                      |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| code changes, asset structs unchanged                  | same `TypeId` (or same shared key), same column: every handle still works                                                                   |
| a non-shared asset struct changed                      | new `TypeId`, so the new code uses a **new, empty column**. The old column and its values stay in the store, unreachable from the new code. |
| a shared asset struct changed size or alignment        | registration asserts, the reload rolls back, the old version keeps running                                                                  |
| a shared asset struct changed, same size and alignment | not detected: the new code reads the old bytes with the new field layout                                                                    |

Asset values are never converted on a reload. The last row of the table is a real hazard for shared asset types, because the check is only size and alignment, not a field-by-field comparison. The full reload behaviour, including what happens to the unreachable column's function table, is in [hot_reloading.md](../levels/hosting/hot_reloading.md#what-happens-to-assets-during-a-reload).

## How does `load_asset` turn a path into a handle?

`World::load_asset::<T>(path)` is a short wrapper. It takes the `ImportRegistry` and the `AssetManager` from the world and calls `load_handle_by_path` with `MetadataPolicy::CreateIfMissing`, which ends in `AssetManager::import`:

1. **Name the asset.** The path is normalized to a key relative to `res` (`meshes/rock.gltf`). That key is the asset's **name**.
2. **Read the `.meta` file** (`meshes/rock.gltf.meta`) through the asset store, if there is one. It holds a format version, the asset type, the guid and the import settings (see [How do `.meta` files work?](#how-do-meta-files-work)).
3. **Return the existing handle if this path is already loaded.** One path is one asset. If the loaded asset's guid disagrees with the `.meta` file's, the import is refused with `PathBoundToOtherGuid`.
4. **Pick the guid.** Use the `.meta` file's guid, or draw a new random one. A guid that another live asset of this type already holds is refused with `DuplicateGuid`; that usually means a file was copied together with its `.meta`.
5. **Read and decode the source** with `T::import`, passing the import settings.
6. **Store it** with `add_named_with_guid(name, guid, asset)`.
7. **Write a `.meta` file** when there was none and the policy allows it. A pack is never written, so a shipped build only reads.

`import_standalone::<T>(path)` is the same for standalone files, except that the guid is in the file's own header and the document under `asset` is decoded into `T`. Asset references inside a standalone document are stored as guids and resolved to handles while it is decoded; a reference to an asset that is not loaded yet becomes `Handle::INVALID`.

## How do `.meta` files work?

A `.meta` file stores what a source file cannot say about itself: **which asset it is** (the guid) and **how to decode it** (the import settings). It never holds the decoded data. The source stays the only copy of the content, and the `.meta` file stays small enough to read, diff and merge by hand.

Only **imported** assets have one. A standalone asset (`.material`, `.scene`, `.theme`) is a JSON document already, so it carries the same header at its own top and needs no sidecar.

### What is the file called?

The full file name of the source, with `.meta` appended. The source's extension is kept, not replaced:

| Source                | Its `.meta` file           |
| --------------------- | -------------------------- |
| `textures/helmet.png` | `textures/helmet.png.meta` |
| `textures/helmet.obj` | `textures/helmet.obj.meta` |
| `data/LICENSE`        | `data/LICENSE.meta`        |

Keeping the extension means `helmet.png` and `helmet.obj` in the same folder get different `.meta` files. A `.meta` file is never an asset itself: `metadata_path_for` returns `None` for it, and importing one is refused with "a .meta file describes an asset; it is not one".

### What is inside?

A JSON object. The **header** belongs to the engine and is the same for every asset type. The **body** belongs to the asset type. This is a real file from `examples/cube/cube_rust/res/models/cube.obj.meta`:

```json
{
  "format_version": 1,
  "asset_type": "pill_master_renderer::assets::Mesh",
  "guid": "2c5651ef82f427b70e391d2b1b841a8e",
  "settings": {
    "flip_v": true,
    "calculate_tangents": true
  }
}
```

| Field            | Owner      | Meaning                                                                                                        |
| ---------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| `format_version` | engine     | The layout of the header. This engine reads `1` (`METADATA_FORMAT_VERSION`) and refuses `0` or anything newer. |
| `asset_type`     | engine     | Which type may read the file: `T::metadata_type_name()`, which defaults to the type's `shared_name`.           |
| `guid`           | engine     | The asset's identity: 32 hexadecimal digits, random, drawn once when the file is first written.                |
| `settings`       | asset type | `T::ImportSettings`, serialized with serde. Missing or `null` means "all defaults".                            |

A standalone file uses the same three header fields, with its content under `asset` instead of `settings`. Both are read by one function, `read_header`, so the importer and the `AssetDatabase` always agree on which files are readable.

> **Why is `asset_type` a stable name and not the Rust type?** A Rust type name (`std::any::type_name`) changes when the type moves to another module, and every `.meta` file of that type would stop matching. So the default is the type's `shared_name`. A type without a shared name falls back to the Rust name, and should override `metadata_type_name` with a fixed string.

### How is a `.meta` file read?

The header is checked before the body, so the error says what is actually wrong:

1. The bytes must be a JSON object.
2. `format_version` must be between `1` and `METADATA_FORMAT_VERSION`.
3. `asset_type` must equal the expected type's name. Otherwise: "it describes a `Texture`, not a `Mesh`".
4. `guid` must be 32 hexadecimal digits.
5. `settings` is decoded as `T::ImportSettings`. An unknown field is ignored. A missing field takes its default, because settings structs are `#[serde(default)]`.

Any failure is an `AssetLoadError::Metadata` that names the `.meta` file. **A file that cannot be read is never overwritten.** It may hold a person's half-finished edit, so the engine reports it and leaves it alone.

### When is a `.meta` file written?

Only into a directory, never into a pack. Every write goes through `asset_store::write_beside`, which:

- finds the source on the filesystem. A packed source has no directory, so nothing is written. This is why a shipping or web build only reads;
- leaves an existing file alone;
- writes to a hidden temporary sibling (`.<file>.meta.<pid>-<seq>.tmp`) and links it into place when it is complete, so a crash never leaves half a file. The asset pack writer skips dot-files, so a leftover temporary file is never shipped.

These are the code paths that write one:

| Who                                                     | When                                                | Guid and settings written                                                                                                                                               |
| ------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `World::load_asset` (`MetadataPolicy::CreateIfMissing`) | the first load of a source that has no `.meta` file | a new guid and the request's initial settings, **after** the source decoded, so a broken source never leaves a `.meta` behind                                           |
| `AssetManager::ensure_metadata`                         | asked for one path, nothing is decoded              | a loaded asset keeps its own guid and the settings it was decoded with; an unloaded source gets a new guid and the type's defaults                                      |
| the editor's **Write meta** action (`WriteAssetMeta`)   | the person asks for a missing `.meta` file          | the same as `ensure_metadata`. A `.meta` file that has no readable guid (an interrupted write) counts as missing and is replaced. Undo deletes it                       |
| the Inspector's import settings (`SetAssetSettings`)    | the person edits a setting                          | read-modify-write of the `settings` field only; the guid stays. With no `.meta` yet, the source is imported first so one exists. Undo writes the previous settings back |
| `DevHost::set_ensure_asset_metadata(true)`              | a frontend turns it on                              | `ensure_metadata` for every source in `res` at once, then again for each `.meta` deleted while the host runs                                                            |

`MetadataPolicy::ReadIfPresent` writes nothing. The asset then gets a guid that lasts **only for this run** (`MetadataSource::InMemoryOnly`). The manager remembers the settings that decoded it (`set_import_settings`), so a later `ensure_metadata` writes those settings and not the type's defaults. Writing the defaults would change how the asset decodes on the next run: for example, a normal map would be read as sRGB.

Two hosts, or two parallel tests, can import the same new source at the same time. Both draw a guid, but only one file can be linked into place. After writing, `import` reads the file back. If the guid there is not its own, it adopts the file's guid and settings, decoding the asset again if those settings differ. The file on disk is always the truth.

Every import reports where its guid and settings came from:

| `MetadataSource` | Meaning                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| `ReadFromFile`   | an existing `.meta` file, on disk or in a pack                                |
| `CreatedOnDisk`  | there was none, and this import wrote it                                      |
| `InMemoryOnly`   | there was none, and none was written: the guid is lost when the program exits |

### What happens when a `.meta` file changes while the host runs?

The dev host's asset watcher (`watchers/asset.rs`) reports a `.meta` change **under its source's path**, marked `through_metadata`. `apply_asset_changes` in `runtime.rs` then decides:

| Change                                  | Result                                                                                                                                                                                                    |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `settings` edited, source is loaded     | `reimport`: decoded again with the new settings into the **same slot**. The handle and guid stay; the content version moves, so the renderer re-uploads just this asset. Logged as `[assets] reimported`. |
| `settings` edited, source is not loaded | ignored. A sidecar edit alone does not load an asset.                                                                                                                                                     |
| `guid` edited under a loaded asset      | refused with `PathBoundToOtherGuid`; the loaded value stays. Handles and saved references still name the old guid.                                                                                        |
| settings no longer fit the type         | refused; the loaded value stays (`[assets] reimport failed; keeping the loaded value`).                                                                                                                   |
| `.meta` deleted                         | the loaded asset keeps its guid and settings until the next run. If `ensure_asset_metadata` is on, the file is written again with the loaded guid.                                                        |

A reimport never empties a slot. The new value is decoded completely before it replaces the old one. A reimport of a source with no `.meta` file uses the type's default settings.

### What happens when an asset is moved, copied or renamed?

The guid decides, because it is what saved scenes store.

- **Moved together with its `.meta` file**: the watcher sees a new path whose `.meta` holds the guid of a loaded asset whose old source is gone. `follow_move` renames that asset to the new path. It keeps its handle, guid and value, and nothing is decoded (`[assets] followed a move`). The editor's move (`pill_assets::move_asset`) always moves both files, and refuses to move if either destination is taken. Standalone assets follow a move the same way, reading the guid from their own header.
- **Copied together with its `.meta` file**: two files now claim one guid. The copy is refused with `DuplicateGuid` ("was it copied together with its .meta file?"), and the `AssetDatabase` reports the conflict instead of indexing either file. Delete the copy's `.meta` file so it gets a new guid.
- **Moved without its `.meta` file**: the source at its new path looks like a new asset and gets a new guid. Saved scenes still name the old guid, and their path hint names the old path, so the references break. Always move both files together.

### Who else reads `.meta` files?

- **`AssetDatabase`** builds the guid ↔ path index from headers alone. It never reads `settings`. For an imported type it reads the `.meta` file; for a standalone type it reads the file itself. A source without a `.meta` file has no lasting guid, so it is not indexed, and a saved reference can reach it only through its path hint.
- **The asset pack** includes `.meta` files with the rest of `res`. The asset store searches packs before directories, so a shipped build reads the guid and settings it was built with.
- **The editor's Inspector** reads settings through `settings_json_for`, which returns the `.meta` file's settings or the type's defaults as JSON, so the editor never needs to know `T`.

### What should an asset type's `ImportSettings` look like?

Every field becomes part of the file format, and old files must keep loading:

- keep the list short: only what the source bytes cannot say;
- mark the struct `#[serde(default)]`, so a file written before a field existed still reads;
- use `BTreeMap`, not `HashMap`. An empty `HashMap` points into the binary that built it, and the stored settings outlive that binary across a reload;
- renaming a field silently resets it to its default in every existing file, because unknown fields are ignored.

### Limitations

- `set_ensure_asset_metadata` has no caller today, although its doc comment says the editor turns it on. In practice a `.meta` file appears when an asset is first loaded, or when the editor's Write meta or settings edit runs. A source that nothing has loaded has no `.meta` file and is missing from the `AssetDatabase`.
- A deleted source stays loaded until the next run, because components may still hold its handle.
- The format has one version. The header rules allow a later version to be read by a newer engine, but there is no migration code yet.

## Where do the bytes come from?

The asset store searches mounts in a fixed order, so loading code never needs to know which build it runs in:

| Build             | What is mounted                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| development       | the project's `res` directory, each extension's read-only `res` directory, then a few fallback directories |
| shipping (native) | the asset pack embedded in the executable                                                                  |
| web               | the asset pack the page fetched                                                                            |

Packs are searched before directories, newest mount first, so a shipped build reads the assets it was built with. The store's state is a static in `pill_engine_core`, which is a single shared DLL, so the host, every module and the project all see the same mounts.

## How does code load an asset when it only has a path?

Through the `ImportRegistry`. `AssetManager::import` is generic, so the type must be known where it is called. A file watcher, the editor or a scene loader only has a path or a type name.

`World::register_imported_asset::<T>()` and `register_standalone_asset::<T>()` record, per type, its file extensions and function pointers compiled for that `T` in the registering DLL. A second type claiming an extension that another live type already imports is refused.

A module does not write those calls. It derives `PillAsset` on the type, with `#[pill(imported)]` or `#[pill(standalone)]`, and its entry point calls the matching method for every asset type its own image declares (`register_all_assets`, sorted by type name), on the first load and on every reload, before the module's `register` function runs. That repeat is what keeps the registry's function pointers, and the column's refresher, pointing into the image that is loaded now. The `ImportedAsset`/`StandaloneAsset` implementations stay hand-written.

The registry also stores per-type **field decorators** for a document's fields (`FieldDecorator::Range` and `Tooltip`, declared with `ImportRegistry::declare_field_decorators`). They are plain data, because the registry outlives the crate that declared them. The editor's Inspector reads them to draw a value as a slider or give its label hover text without knowing the type. A manager's settings asset (`res/settings/pill_audio.audio_settings`, a standalone asset) uses this for its sink counts and ear separation.

Those function pointers point into the registering DLL, which a reload may unload. Each registration therefore holds only a weak reference to a **marker resource** that the registering generation inserts and claims. When the host retires that generation's claims, the marker is dropped while the DLL is still loaded, the weak reference dies, and the registry stops calling into it. If several modules register the same type (the project and the renderer's data module both do), the newest live registration is used.

## How are asset references saved in scenes?

As a guid plus a path hint, never as a handle.

A handle's slot and generation only mean something in the current run; the next run may load the same mesh into another slot. So the field layer writes a `Handle<T>` field as a `SavedAssetReference`: the asset's guid, plus its path as a hint that is not trusted.

Loading reverses it:

1. Look the guid up in the `AssetManager`. If the asset is loaded, use its handle.
2. Otherwise, find the guid's path in the `AssetDatabase` and load it through the `ImportRegistry` (`load_by_guid`).
3. If the guid is unknown, try the path hint.
4. If nothing works, the field becomes `Handle::INVALID`, the problem is reported once per guid, and the renderer falls back to its default material, shader or texture.

`AssetDatabase` exists for step 2: it indexes every asset under `res` (or in a pack) by guid and by path, whether or not it is loaded, reading only each header's `format_version`, `asset_type` and `guid`. It also reports a guid that two files claim instead of indexing either.

Hot-reload persistence is different: it keeps handles as their raw `(index, generation)` pair through the handle's own serde, because the asset store survives the reload and the slots stay valid.

## Where is this in the code?

All paths are in `modules/engine/pill_engine_core/src/` unless noted.

| What                                                                 | Where                                                                           |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `Asset`, `Handle`, `AssetGuid`, `AssetManager`, `register`, `rehome` | `asset.rs`                                                                      |
| `World::load_asset`, `Engine::load_scene_file`                       | `asset_loading.rs`                                                              |
| `.meta` files, `ImportedAsset`, `AssetManager::import`               | `asset_metadata.rs`                                                             |
| Standalone documents, `import_standalone`                            | `asset_standalone.rs`                                                           |
| Extension → type lookup, liveness markers                            | `asset_import_registry.rs`                                                      |
| `register_asset`, `register_imported_asset`, `rehome_assets`         | `world/resources.rs`                                                            |
| Guid ↔ path index                                                    | `asset_database.rs`                                                             |
| Packs and mounted directories, `write_beside`                        | `asset_store.rs`                                                                |
| `reimport`, `ensure_metadata`, `follow_move`, `settings_json_for`    | `asset_metadata.rs`                                                             |
| Moving a source with its `.meta` file (`move_asset`)                 | `modules/assets/pill_assets/src/asset_move.rs`                                  |
| Watching `.meta` changes, `apply_asset_changes`                      | `modules/hosting/pill_development_host/src/watchers/asset.rs`, `runtime.rs`     |
| Editor writes (`WriteAssetMeta`, `SetAssetSettings`)                 | `modules/editor/pill_editor_core/src/editor_state/apply/asset.rs`               |
| Saved references, `AssetReference`                                   | `saved_references.rs`, `asset_reference.rs`                                     |
| Pack writer                                                          | `modules/assets/pill_assets/`                                                   |
| The renderer's asset types                                           | `modules/extensions/pill_master_renderer/pill_master_renderer_data/src/assets/` |
