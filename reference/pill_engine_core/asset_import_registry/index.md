<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1318"></a>

# Module `pill_engine_core::asset_import_registry`

Source: `engine\pill_engine_core\src\asset_import_registry.rs:1`

Importing assets by file extension, for code that does not know their type.
Importing assets whose Rust type the caller does not know.

## Responsibilities

- Hold, per imported asset type, its metadata type name, the source
  extensions it accepts and type-erased entry points
  ([`ImportRegistry`](struct.ImportRegistry.md#rustdoc-item-1247)).
- Import, reimport and read or check the settings of a file by its
  extension or type name, for code that sees only paths: the `res` scan,
  the file watcher, an editor.
- Import every known source under a directory in one call
  ([`ImportRegistry::scan`](struct.ImportRegistry.md#rustdoc-item-1740)), reporting what it did.
- Hold standalone asset types too - files that are the asset, such as a
  `.material` - with the default document a new file of each starts from.
- Refuse a second type claiming an extension another type already has.
- Never call into a binary that is gone: entries whose registering
  generation was retired are skipped and pruned.

## Design

[`AssetManager::import`](../asset/struct.AssetManager.md#rustdoc-item-1114) is generic, so the type is fixed where it is called.
A caller holding only `textures/a.png` needs the step from an extension to a
type. That step is what [`World::register_imported_asset`] records: each
registration stores function pointers monomorphized for that type, in the
binary that registered it.

Those pointers are code from the registering DLL. The DLL is unmapped some
time after a reload retires it, so each registration holds only a weak
reference to a marker resource and stays callable only while that marker
lives:

- A reload's `init` registers again, which records fresh pointers into the
  new image and replaces the marker.
- A generation that stops registering a type, or a module that is unloaded,
  loses its claim on the marker. The host drops unclaimed resources while the
  image is still mapped, which ends the registration.

Several binaries can register one type: a project calls
`pill_master_renderer_data::register` in its own `init`, and so does the data
crate's own module. Each keeps its own registration, and the newest live one
is used. A project that stops registering a type therefore falls back to the
module's registration instead of losing the type.

[`World::register_imported_asset`]: ../world/struct.World.md#rustdoc-item-1702

## Module contents

### Structs
- [`AssetIdentity`](struct.AssetIdentity.md#rustdoc-item-1403) — The live asset a handle addresses, as a tool shows it.
- [`ErasedImportOutcome`](struct.ErasedImportOutcome.md#rustdoc-item-1315) — What an erased import or reimport did, without the typed handle.
- [`ImportedTypeEntry`](struct.ImportedTypeEntry.md#rustdoc-item-1631) — One imported asset type and every live registration of it, newest last.
- [`ImportFunctions`](struct.ImportFunctions.md#rustdoc-item-1457) — One type's erased entry points, all monomorphized in the binary that
- [`ImportRegistrationMarker`](struct.ImportRegistrationMarker.md#rustdoc-item-1817) — The resource whose lifetime is one generation's registration of `T`.
- [`ImportRegistry`](struct.ImportRegistry.md#rustdoc-item-1247) — The imported asset types of a world, by metadata type name and source
- [`Registration`](struct.Registration.md#rustdoc-item-1599) — One binary's registration of a type.
- [`ScanReport`](struct.ScanReport.md#rustdoc-item-1741) — What [`ImportRegistry::scan`] did, file by file.

### Enums
- [`ErasedImportError`](enum.ErasedImportError.md#rustdoc-item-826) — Why an erased import, reimport or settings call did not run.
- [`FieldDecorator`](enum.FieldDecorator.md#rustdoc-item-1666) — How one field of an asset's settings document draws in the Inspector.
- [`ImportChange`](enum.ImportChange.md#rustdoc-item-1312) — What a call did with the value under a path, including the case where
- [`ImportRegistrationError`](enum.ImportRegistrationError.md#rustdoc-item-1556) — Why [`ImportRegistry::register`] refused a type.

### Functions
- [`asset_identity_of`](fn.asset_identity_of.md#rustdoc-item-1494) — The live asset a `T` handle with `index` and `generation` addresses, or
- [`guid_by_path`](fn.guid_by_path.md#rustdoc-item-1495) — The guid a `T` is loaded under, addressed by its path's normalized name.
- [`guid_clause`](fn.guid_clause.md#rustdoc-item-1594) — Builds the ` with guid <guid>` part of a wrong-type message. It is empty
- [`handle_by_name_of`](fn.handle_by_name_of.md#rustdoc-item-1497) — The raw parts of the handle the store holds `T` under `name`, if any.
- [`import_erased`](fn.import_erased.md#rustdoc-item-1491) — [`AssetManager::import`] for `T`, with the type's default initial settings.
- [`import_standalone_erased`](fn.import_standalone_erased.md#rustdoc-item-1489) — [`AssetManager::import_standalone`] for `T`. The metadata policy does not
- [`is_loaded`](fn.is_loaded.md#rustdoc-item-1492) — Whether a `T` is loaded under `path`'s normalized name.
- [`loaded_assets_of`](fn.loaded_assets_of.md#rustdoc-item-1498) — Every live `T` in the store, as its guid and its name.
- [`loaded_by_guid_of`](fn.loaded_by_guid_of.md#rustdoc-item-1496) — The name a `T` with `guid` is loaded under, with the handle's raw parts.
- [`reimport_erased`](fn.reimport_erased.md#rustdoc-item-1499) — [`AssetManager::reimport`] for `T`.
- [`reimport_standalone_erased`](fn.reimport_standalone_erased.md#rustdoc-item-1490) — [`AssetManager::reimport_standalone`] for `T`.
- [`remove_loaded`](fn.remove_loaded.md#rustdoc-item-1493) — Drop the `T` loaded under `path`'s normalized name, if any.
- [`source_files`](fn.source_files.md#rustdoc-item-1813) — Every file under `root`, as paths relative to it, sorted; metadata files

### Type aliases
- [`DefaultDocumentFunction`](type.DefaultDocumentFunction.md#rustdoc-item-1400) — A standalone type's default document, as JSON.
- [`EnsureMetadataFunction`](type.EnsureMetadataFunction.md#rustdoc-item-1401) — Write a sourced asset's metadata file when it has none, and return the guid
- [`ErasedImportResult`](type.ErasedImportResult.md#rustdoc-item-1393) — The result of an erased import or reimport.
- [`FollowMoveFunction`](type.FollowMoveFunction.md#rustdoc-item-1399) — Follow a source that was moved together with its metadata file, and return
- [`GuidByPathFunction`](type.GuidByPathFunction.md#rustdoc-item-1404) — The guid the store holds a path's asset under, when it is loaded.
- [`IdentityFunction`](type.IdentityFunction.md#rustdoc-item-1402) — What a handle of the type addresses, from its index and generation.
- [`ImportFunction`](type.ImportFunction.md#rustdoc-item-1391) — Import a path as one asset type.
- [`IsLoadedFunction`](type.IsLoadedFunction.md#rustdoc-item-1397) — Whether an asset is loaded under a path's name.
- [`LoadedByGuidFunction`](type.LoadedByGuidFunction.md#rustdoc-item-1405) — What the store holds for a guid: its name and the handle's raw parts.
- [`LoadedByNameFunction`](type.LoadedByNameFunction.md#rustdoc-item-1406) — The handle the store holds an asset under a name, as its raw parts.
- [`LoadedFunction`](type.LoadedFunction.md#rustdoc-item-1407) — Every live asset of the type, as its guid and its name.
- [`NormalizeSettingsFunction`](type.NormalizeSettingsFunction.md#rustdoc-item-1396) — Settings JSON checked against the type and normalized.
- [`ReimportFunction`](type.ReimportFunction.md#rustdoc-item-1394) — Decode a loaded path again, in place.
- [`RemoveLoadedFunction`](type.RemoveLoadedFunction.md#rustdoc-item-1398) — Drop the asset loaded under a path's name; `true` when one went.
- [`SettingsJsonFunction`](type.SettingsJsonFunction.md#rustdoc-item-1395) — The settings a path would use, as JSON.
