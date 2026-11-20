<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5808"></a>

# Module `pill_editor_core::hooks::events`

Source: `editor\pill_editor_core\src\hooks\events.rs:1`

The payloads a callback receives and the verdict it answers.
The payloads the editor API's callbacks receive.

## Responsibilities

- Say which part of a field interaction an edit belongs to
  ([`FieldEditPhase`](enum.FieldEditPhase.md#rustdoc-item-1936)) and what made it happen ([`FieldEditCause`](enum.FieldEditCause.md#rustdoc-item-5073)).
- Define the type-erased field payload the registry hands around
  ([`FieldEditView`](struct.FieldEditView.md#rustdoc-item-5171)) and the typed view a callback reads ([`FieldEdit`](struct.FieldEdit.md#rustdoc-item-5349)).
- Define what a before-callback decides ([`HookVerdict`](enum.HookVerdict.md#rustdoc-item-5261)).
- Erase a typed callback to a plain `fn` pointer, and call it back with the
  component type it was registered for.

## Module contents

### Structs
- [`AssetEdit`](struct.AssetEdit.md#rustdoc-item-5499) — One asset-file edit.
- [`ComponentEdit`](struct.ComponentEdit.md#rustdoc-item-5381) — One component added to or removed from an entity.
- [`ElementSelectionChanged`](struct.ElementSelectionChanged.md#rustdoc-item-5770) — One element-selection change.
- [`EntityEdit`](struct.EntityEdit.md#rustdoc-item-5417) — One entity created or destroyed.
- [`FieldEdit`](struct.FieldEdit.md#rustdoc-item-5349) — One field edit, typed by the component and its generated field enum.
- [`FieldEditView`](struct.FieldEditView.md#rustdoc-item-5171) — One field edit, as the type-erased registry hands it to a callback.
- [`HistoryEdit`](struct.HistoryEdit.md#rustdoc-item-5535) — One walk through the undo history.
- [`PlayEdit`](struct.PlayEdit.md#rustdoc-item-5692) — One play-mode change.
- [`SceneEdit`](struct.SceneEdit.md#rustdoc-item-5657) — One scene document change.
- [`SelectionChanged`](struct.SelectionChanged.md#rustdoc-item-5617) — One selection change, whatever made it.
- [`SelectionSnapshot`](struct.SelectionSnapshot.md#rustdoc-item-5575) — The selection's four slots at one moment.
- [`ToolActivatedEdit`](struct.ToolActivatedEdit.md#rustdoc-item-5728) — One active-tool change.

### Enums
- [`AssetEditKind`](enum.AssetEditKind.md#rustdoc-item-5136) — What an asset edit did.
- [`FieldEditCause`](enum.FieldEditCause.md#rustdoc-item-5073) — What made a field edit happen.
- [`FieldEditPhase`](enum.FieldEditPhase.md#rustdoc-item-1936) — Which part of one field interaction an edit belongs to.
- [`HookVerdict`](enum.HookVerdict.md#rustdoc-item-5261) — What a before-callback decides about a field edit.

### Functions
- [`apply_field_edit_after`](fn.apply_field_edit_after.md#rustdoc-item-5377) — Calls one typed after-callback with the view of the component it named.
- [`apply_field_edit_before`](fn.apply_field_edit_before.md#rustdoc-item-5376) — Calls one typed before-callback with the view of the component it named.
- [`component_matches`](fn.component_matches.md#rustdoc-item-5375) — Whether `component` names `T`, by its registered name or its Rust path.
