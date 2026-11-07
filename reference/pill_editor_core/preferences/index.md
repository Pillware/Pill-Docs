<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1654"></a>

# Module `pill_editor_core::preferences`

Source: `editor\pill_editor_core\src\preferences.rs:1`

The Preferences tab's shared vocabulary: the file's editable keys and their
parsing.
The Preferences tab's shared vocabulary: the preferences file's editable
keys, the rules that turn row text into JSON, and the helpers that read and
write the document.

## Responsibilities

- [`PREFERENCE_FIELDS`]: the editable rows the Preferences tab draws, in row
  order. Each row names its key in the file, the label it shows, and the
  text a file without that key shows.
- [`PreferencesView`]: the file's values as display strings, plus the parsed
  icon size and the project's remembered gizmo entry. The tab seeds its
  buffers from this view.
- [`parse_value`], [`set_key`], [`read_document`], [`write_document`]: the
  text-to-JSON rule and the dotted-key document access the `SetPreferences`
  command applies.
- [`keymap_preset`]: the navigation preset the file selects, or Blender
  when the file says nothing usable.
- [`gizmo_hit_radius`], [`gizmo_icon_size`]: one clamped number each, with
  the default a missing key falls back to.
- [`update`]: reads, edits and writes the document in one step, for a caller
  that updates only the keys it owns.

## Design

The preferences file is plain JSON, and the editor does not own it alone.
The tab's save writes the editor-wide rows, and the executable writes the
per-project gizmo entry. Every write therefore reads the document first and
changes only the keys its owner owns, so a key the other writer left behind
survives the save.

A row holds the text the user typed. [`parse_value`] tries that text as
bare JSON first, so a number or a boolean round-trips, and stores it as a
string otherwise. A blank row writes nothing, so a key that was never set
stays absent and its reader keeps its own default.

## Module contents

### Structs
- [`PreferenceField`](struct.PreferenceField.md#rustdoc-item-6296) — One editable preference: the document key, the row's label and the text a
- [`PreferencesView`](struct.PreferencesView.md#rustdoc-item-3516) — The file's values as the tab shows them.

### Functions
- [`display_value`](fn.display_value.md#rustdoc-item-6377) — Returns one JSON value as the tab's text: a string verbatim, and anything
- [`gizmo_hit_radius`](fn.gizmo_hit_radius.md#rustdoc-item-6374) — Returns the gizmo handle's hit radius the file asks for, as a multiplier on
- [`gizmo_icon_size`](fn.gizmo_icon_size.md#rustdoc-item-6375) — Returns the scene badges' icon size the file asks for, in points.
- [`keymap_preset`](fn.keymap_preset.md#rustdoc-item-6373) — Returns the keymap preset the file selects.
- [`lookup`](fn.lookup.md#rustdoc-item-6376) — Follows a dotted key through the document.
- [`parse_document`](fn.parse_document.md#rustdoc-item-6381) — Parses a preferences file's text into its document.
- [`parse_value`](fn.parse_value.md#rustdoc-item-6378) — Parses one row's text into JSON.
- [`read_document`](fn.read_document.md#rustdoc-item-6380) — Reads the preferences document a write will modify.
- [`set_key`](fn.set_key.md#rustdoc-item-6379) — Sets one dotted key, creating intermediate objects on the way.
- [`update`](fn.update.md#rustdoc-item-6383) — Reads the preferences document, applies the edit and writes it back.
- [`write_document`](fn.write_document.md#rustdoc-item-6382) — Writes the document the way the editor writes its state files. The text

### Type aliases
- [`PreferencesDraft`](type.PreferencesDraft.md#rustdoc-item-6297) — The tab's unsaved field buffers: one text per editable key.

### Constants
- [`GIZMO_HIT_RADIUS_DEFAULT`](constant.GIZMO_HIT_RADIUS_DEFAULT.md#rustdoc-item-6290) — The hit radius used when the file says nothing: about the width the overlay
- [`GIZMO_HIT_RADIUS_KEY`](constant.GIZMO_HIT_RADIUS_KEY.md#rustdoc-item-6289) — The preference key the gizmo's hit radius lives under.
- [`GIZMO_HIT_RADIUS_RANGE`](constant.GIZMO_HIT_RADIUS_RANGE.md#rustdoc-item-6291) — The range a file's hit radius is clamped into, as a multiplier on the
- [`GIZMO_ICON_SIZE_DEFAULT`](constant.GIZMO_ICON_SIZE_DEFAULT.md#rustdoc-item-6293) — The icon size used when the file says nothing, in points.
- [`GIZMO_ICON_SIZE_KEY`](constant.GIZMO_ICON_SIZE_KEY.md#rustdoc-item-6292) — The preference key the scene badges' icon size lives under.
- [`GIZMO_ICON_SIZE_RANGE`](constant.GIZMO_ICON_SIZE_RANGE.md#rustdoc-item-6294) — The range a file's icon size is clamped into, in points: small enough to
- [`KEYMAP_PRESET_KEY`](constant.KEYMAP_PRESET_KEY.md#rustdoc-item-6288) — The preference key the keymap preset lives under.
- [`PREFERENCE_FIELDS`](constant.PREFERENCE_FIELDS.md#rustdoc-item-6295) — The editable rows, in the order the tab draws them.
- [`THEME_PREFERENCE_KEY`](constant.THEME_PREFERENCE_KEY.md#rustdoc-item-6287) — The preference key the editor's user theme layer is named under.
