<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2471"></a>

# Module `pill_editor_core::editor_state`

Source: `editor\pill_editor_core\src\editor_state\mod.rs:1`

The editor's snapshots of the engine and the commands it applies to it.
The editor's own view of the engine's state, and the commands that edit it.

This module uses `pill_engine` directly. `pill_development_host` only hands
the engine over, through `DevHost::engine()` and `DevHost::engine_mut()`.

## Responsibilities

- Own the tiered [`EditorSnapshot`] types rebuilt from a live `&Engine`.
- Own the [`EditorCommand`] types and the applier that runs one batch.
- Own the shared [`EditorSelection`] and the armed [`EntityPickRequest`],
  the two world resources the editor reads and writes.

## Design

- **Reads** are tiered snapshots ([`EditorSnapshot`]) rebuilt from a live
  `&Engine` at the frame boundary. A capture reads everything it shows from
  the live engine instead of from a cache, so a hot reload cannot leave
  stale rows behind. Components are addressed by name and looked up again
  on every capture.
- **Mutations** are queued [`EditorCommand`]s applied at the frame
  boundary, before the frame runs. Each command's engine change is all or
  nothing, and a failure comes back as an `(index, message)` pair for the
  Console panel. The asset-file commands are the exception, because a
  filesystem is not a transaction. They copy, write and remove files, try a
  rollback when a later step fails, and name every file the rollback could
  not take back.

## Module contents

### Modules
- [`apply`](apply/index.md#rustdoc-item-2451) — Applies a command batch, with one module per command family.
- [`command`](command/index.md#rustdoc-item-2756) — The editor's command vocabulary and the metadata the history reads.

### Structs
- [`AssetDetail`](struct.AssetDetail.md#rustdoc-item-3429) — The selected asset's detail for the Inspector: its row data
- [`AssetFieldDecorator`](struct.AssetFieldDecorator.md#rustdoc-item-3428) — One field decorator an asset type declares, as the Inspector reads it.
- [`AssetListing`](struct.AssetListing.md#rustdoc-item-159) — One row of the Assets panel: a file or folder the browser knows about.
- [`AssetReferenceField`](struct.AssetReferenceField.md#rustdoc-item-3426) — One reference field of an asset's settings, as the Inspector draws it.
- [`ComponentFieldView`](struct.ComponentFieldView.md#rustdoc-item-2843) — One field of a component's layout, as the editor's own snapshot keeps it.
- [`ComponentSeed`](struct.ComponentSeed.md#rustdoc-item-1214) — One component to place on a newly created entity.
- [`ComponentToolRow`](struct.ComponentToolRow.md#rustdoc-item-3801) — One component tool the selection's entity is offered, as the floating
- [`ComponentView`](struct.ComponentView.md#rustdoc-item-1217) — One attached component of the selected entity, with its current values.
- [`EditorSelection`](struct.EditorSelection.md#rustdoc-item-158) — The editor's shared selection, read by every data panel and by the scene.
- [`EditorSnapshot`](struct.EditorSnapshot.md#rustdoc-item-1207) — The complete per-refresh view the editor renders.
- [`ElementRef`](struct.ElementRef.md#rustdoc-item-2587) — One element of one entity: what a tool reports and the selection stores.
- [`ElementSelection`](struct.ElementSelection.md#rustdoc-item-2462) — The editor's element slot: the selected elements of one entity, all of one
- [`EngineAsset`](struct.EngineAsset.md#rustdoc-item-3347) — An asset the store holds that has no file of the project's behind it.
- [`EntityDetail`](struct.EntityDetail.md#rustdoc-item-1202) — The expensive tier of the snapshot, built only for the selected entities.
- [`EntityListEntry`](struct.EntityListEntry.md#rustdoc-item-2801) — One line of the Hierarchy list. It is cheap to build and is rebuilt on
- [`EntityPickRequest`](struct.EntityPickRequest.md#rustdoc-item-3131) — The world resource that carries an armed entity pick.
- [`EntityPickTarget`](struct.EntityPickTarget.md#rustdoc-item-3092) — The field an armed entity reference row waits for a scene click to name,
- [`GizmoTypeView`](struct.GizmoTypeView.md#rustdoc-item-3803) — One registered component gizmo, as the Preferences tab lists it.
- [`NoopObserver`](struct.NoopObserver.md#rustdoc-item-2762) — The observer that does nothing: the form [`EditorCommand::apply_recorded`]
- [`RegisteredComponent`](struct.RegisteredComponent.md#rustdoc-item-2964) — One entry of the Inspector's "add component" picker.
- [`ResourceFieldView`](struct.ResourceFieldView.md#rustdoc-item-3878) — One editable field of a resource.
- [`ResourceView`](struct.ResourceView.md#rustdoc-item-3824) — One editable resource, as the Inspector's resource section shows it.
- [`StandaloneTypeInfo`](struct.StandaloneTypeInfo.md#rustdoc-item-162) — One standalone asset type that a new file can be created for. It is a row
- [`SystemSummary`](struct.SystemSummary.md#rustdoc-item-3218) — One row of the Systems tab.

### Enums
- [`AssetKind`](enum.AssetKind.md#rustdoc-item-3257) — What a listing row is: a folder, or the type the host's listing reported
- [`AssetReferenceLabel`](enum.AssetReferenceLabel.md#rustdoc-item-2887) — What an asset reference field currently names, as the Inspector shows it.
- [`ElementClickRefusal`](enum.ElementClickRefusal.md#rustdoc-item-3553) — Why an element click could not become a selection.
- [`EntityReferenceLabel`](enum.EntityReferenceLabel.md#rustdoc-item-2889) — What an entity reference field currently names, as the Inspector shows it.
- [`SelectionClick`](enum.SelectionClick.md#rustdoc-item-3597) — What a click on an entity row means.

### Traits
- [`CommandObserver`](trait.CommandObserver.md#rustdoc-item-2607) — Receives each command a batch applied, for the editor API's callbacks.

### Functions
- [`asset_authoring_root`](fn.asset_authoring_root.md#rustdoc-item-4043) — Returns the mounted asset directory that the asset commands resolve their
- [`asset_slash`](fn.asset_slash.md#rustdoc-item-4045) — Returns `path` as a `/`-separated string, the form asset commands carry.
- [`document_guid`](fn.document_guid.md#rustdoc-item-4046) — Returns the guid a standalone asset's own header holds, when its bytes are a
- [`refuse_module_resource`](fn.refuse_module_resource.md#rustdoc-item-4044) — Returns an error when `relative_path` names one of a module's resources.
- [`registered_components`](fn.registered_components.md#rustdoc-item-4042) — Returns the registered component types for the add picker, one entry per
- [`resolve_asset_reference`](fn.resolve_asset_reference.md#rustdoc-item-4038) — Resolves the asset value `asset_reference` names, and loads the asset when
- [`roll_back_files`](fn.roll_back_files.md#rustdoc-item-4049) — Removes the files a command created and returns the ones it could not
- [`roll_back_files_with`](fn.roll_back_files_with.md#rustdoc-item-4050) — Same as [`roll_back_files`] with a file remover the caller supplies, so the
- [`system_owner_label`](fn.system_owner_label.md#rustdoc-item-4040) — Labels a system owner using the host's extension names.
- [`warn_left_behind`](fn.warn_left_behind.md#rustdoc-item-4053) — Logs the files a command meant to take back and could not.
- [`with_rollback_paths`](fn.with_rollback_paths.md#rustdoc-item-4054) — Extends a failed command's message with the paths its rollback left on
- [`write_asset_bytes`](fn.write_asset_bytes.md#rustdoc-item-4048) — Writes `bytes` to `file_path` through a temporary file beside it, so a

### Constants
- [`EXTENSIONS_ROOT`](constant.EXTENSIONS_ROOT.md#rustdoc-item-601) — The Assets panel's second root: the folder that holds every extension's
- [`FOLDER_KIND`](constant.FOLDER_KIND.md#rustdoc-item-2796) — The listing label a folder row carries. Every other label is a file's type.
- [`SELECTED_DETAILS_MAX`](constant.SELECTED_DETAILS_MAX.md#rustdoc-item-2795) — How many selected entities the snapshot captures a detail for.

## Re-exports

- [`pub use command::CommandFamily;`](command/enum.CommandFamily.md#rustdoc-item-2615)
- [`pub use command::EditorCommand;`](command/enum.EditorCommand.md#rustdoc-item-1157)
- [`pub use command::RecordedApply;`](command/struct.RecordedApply.md#rustdoc-item-2605)
