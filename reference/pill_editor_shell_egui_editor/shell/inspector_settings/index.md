<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-818"></a>

# Module `pill_editor_shell_egui_editor::shell::inspector_settings`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:1`

The [`inspector_settings`](#rustdoc-item-818) module: the inspector's asset import settings.
The Inspector's asset import settings.

## Responsibilities

- `asset_settings_rows` and `asset_settings_row`: draw the selected asset's
  settings as a recursive walk. A container becomes a heading over its
  children one level in; a leaf becomes one label and control pair.
- `settings_row_label`, `settings_heading` and `settings_level`: the naming
  and the indent the walk shares with the reference rows, so
  `parameters.pbr_base.Color` draws a `parameters` heading, a `pbr_base`
  heading and a `Color` row.
- `reference_row` and `reference_picker`: one row per reference field the
  asset's type declares, and the popup that picks a new target. The same
  row serves a material's shader and its texture slots, driven by the
  snapshot's answers rather than by knowing a renderer type.
- `reference_list_rows`, `reference_list_entry_row` and `list_drag_update`:
  a reference family as a list a person reorders by dragging its rows, such
  as a chain's pass list.
- `settings_commit`: the recorded command a committed settings value
  queues.
- The colour parameter shape (`parameters.<slot>.Color`, an array of
  numbers) drawn as a swatch.

## Design

Every settings edit is one recorded [`EditorCommand::SetAssetSettings`]
step carrying the whole patched document, so undo and the file's round trip
stay the same whichever row wrote it. A row that references another asset
writes that asset's **guid**, which is the form the file holds; each
listing row carries its own guid for exactly this. The first write also
creates a slot the document does not hold yet.

The globs below are absolute paths, so a patch crate resolves them too.

## Module contents

### Structs
- [`ListEntryDrag`](struct.ListEntryDrag.md#rustdoc-item-756) — What a list entry carries while it is dragged: the family it belongs to and
- [`SettingsWalk`](struct.SettingsWalk.md#rustdoc-item-728) — What the settings rows share while the recursive walk draws them.

### Functions
- [`asset_settings_row`](fn.asset_settings_row.md#rustdoc-item-805) — Draw one settings row: a leaf gets the widget its JSON kind asks for, and
- [`asset_settings_rows`](fn.asset_settings_rows.md#rustdoc-item-794) — Draw the settings document's rows: objects and arrays nest their children,
- [`colour_parameter`](fn.colour_parameter.md#rustdoc-item-806) — Returns the channel values of a colour parameter, when `key` names one.
- [`colour_parameter_row`](fn.colour_parameter_row.md#rustdoc-item-807) — Draw one colour parameter: a swatch whose popup holds the picker.
- [`dropped_asset_path`](fn.dropped_asset_path.md#rustdoc-item-808) — Returns the path an asset from the Assets tab releases onto `response`,
- [`insertion_index`](fn.insertion_index.md#rustdoc-item-801) — Returns the insertion point a pointer at `y` names: the first row whose
- [`list_append_row`](fn.list_append_row.md#rustdoc-item-799) — Draw the row that appends an entry: the same picker, for the index one past
- [`list_drag_update`](fn.list_drag_update.md#rustdoc-item-800) — Turn a held list row into a reorder: while a row of this family is over the
- [`list_entry_field`](fn.list_entry_field.md#rustdoc-item-797) — Returns the reference field one list entry draws.
- [`list_picker_width`](fn.list_picker_width.md#rustdoc-item-803) — Returns the width a list row's picker takes: the row's width less its label
- [`moved_entry`](fn.moved_entry.md#rustdoc-item-802) — Returns the entries with the one at `from` moved to the insertion point
- [`reference_candidates`](fn.reference_candidates.md#rustdoc-item-811) — Returns the listing rows a reference's picker offers: the assets whose type
- [`reference_entries`](fn.reference_entries.md#rustdoc-item-796) — Returns the entries a reference family's list holds, cloned out of the
- [`reference_family`](fn.reference_family.md#rustdoc-item-812) — Returns the list family a reference field's key belongs to.
- [`reference_guid`](fn.reference_guid.md#rustdoc-item-809) — Returns the guid a settings reference holds, in either spelling.
- [`reference_list_entry_row`](fn.reference_list_entry_row.md#rustdoc-item-798) — Draw one entry of a reference list: its index behind a drag handle, its
- [`reference_list_rows`](fn.reference_list_rows.md#rustdoc-item-795) — Draw every list family a reference field set names - `passes[0]`,
- [`reference_path`](fn.reference_path.md#rustdoc-item-814) — Returns the listing path of the asset a reference names, when the listing
- [`reference_picker`](fn.reference_picker.md#rustdoc-item-810) — Draw the picker a reference opens under its row: every asset of the field's
- [`reference_row`](fn.reference_row.md#rustdoc-item-815) — Draw one reference field: the referenced asset's path (or its guid, when
- [`reference_text`](fn.reference_text.md#rustdoc-item-813) — Returns the text a reference row shows for its field.
- [`remember_list_row_rect`](fn.remember_list_row_rect.md#rustdoc-item-804) — Remembers a list row's rectangle and logs it once per placement, keyed
- [`settings_commit`](fn.settings_commit.md#rustdoc-item-817) — Queue the recorded edit that puts `value` at `key` in the settings, and
- [`settings_heading`](fn.settings_heading.md#rustdoc-item-792) — Draw a settings container's heading: its leaf name, muted, with the whole
- [`settings_level`](fn.settings_level.md#rustdoc-item-793) — Draw `add_contents` one settings level in.
- [`settings_row_label`](fn.settings_row_label.md#rustdoc-item-791) — The label a settings row carries: the leaf of its key.
- [`settings_row_range`](fn.settings_row_range.md#rustdoc-item-790) — The range one settings row draws as a slider, when its type declared one.
- [`settings_row_tooltip`](fn.settings_row_tooltip.md#rustdoc-item-789) — The hover text one settings row carries: the tooltip its type declared, or
- [`texture_guid_for`](fn.texture_guid_for.md#rustdoc-item-816) — Returns the guid of the listing row a path names.

### Constants
- [`LIST_REMOVE_WIDTH`](constant.LIST_REMOVE_WIDTH.md#rustdoc-item-720) — The width the remove button takes at the end of a list row, in points.
- [`SETTINGS_ROW_INDENT`](constant.SETTINGS_ROW_INDENT.md#rustdoc-item-719) — The indent one nesting level of a settings document adds, in points.
