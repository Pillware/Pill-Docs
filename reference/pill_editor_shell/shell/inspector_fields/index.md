<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-705"></a>

# Module `pill_editor_shell::shell::inspector_fields`

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:1`

The [`inspector_fields`](#rustdoc-item-705) module: the inspector's field rows: the decorators
a component declares, the row model and the control each row draws.
The Inspector's field rows: one row of a component section, with the
decorators and separators that row draws.

## Responsibilities

- `inspector_field_row`: draws one row the Inspector's row model produced -
  a `[Header]` or `[Space]` separator, one field with the widget its
  `[Tooltip]`, `[Range]` or `[Min]` asked for, a vector row, a colour row,
  or a value shown read-only.
- `inspector_asset_row` and `inspector_entity_row`: a reference row. It
  names the target it points at and offers a picker, a clear button and a
  drop target for an asset or entity dragged out of another tab.
  `AssetRowInput` and `EntityRowInput` carry what those rows draw from.
- `queue_field_edit` and `queue_element_edit`: the one recorded step a row's
  edit becomes, for every selected entity that carries the component.
- `inspector_row` and `is_scalar_field`: the shared label/control row, and
  whether a value has a widget of its own.
- `field_widget_name` and the row's `RowLogged` memory: the once-per-row log
  line the suites assert on.
- `remember_asset_row_text`, `remember_asset_row_rect` and their entity
  twins: a row's current text (logged when it changes) and its rectangle
  (logged once per placement), which the editor suite waits on.
- `record_row_placement`: the once-per-placement rule those rectangles share
  with the asset-settings rows.

The two globs below spell the whole path, so a patch crate resolves them
too.

## Module contents

### Structs
- [`AssetRowInput`](struct.AssetRowInput.md#rustdoc-item-616) — What one asset reference row draws from: the field, its component and
- [`EntityRowInput`](struct.EntityRowInput.md#rustdoc-item-650) — What one entity reference row draws from: the field, its component and the

### Functions
- [`asset_drop_fits`](fn.asset_drop_fits.md#rustdoc-item-680) — Whether a file dragged out of the Assets tab may be dropped on an asset row.
- [`color_channels`](fn.color_channels.md#rustdoc-item-691) — Returns the channels a colour row's values hold, as the unmultiplied linear
- [`field_widget_name`](fn.field_widget_name.md#rustdoc-item-697) — Returns the name a row's widget logs under, so a suite can assert which
- [`has_field_editor`](fn.has_field_editor.md#rustdoc-item-700) — Returns whether a field's value has an editor in the Inspector: every
- [`inspector_asset_row`](fn.inspector_asset_row.md#rustdoc-item-681) — Draws one asset reference row.
- [`inspector_entity_row`](fn.inspector_entity_row.md#rustdoc-item-682) — Draws one entity reference row.
- [`inspector_field_row`](fn.inspector_field_row.md#rustdoc-item-677) — Draws one row of a component section.
- [`inspector_row`](fn.inspector_row.md#rustdoc-item-699) — Draws the Inspector's field row: the shared label/control row ([`row`]),
- [`is_scalar_field`](fn.is_scalar_field.md#rustdoc-item-704) — Returns whether a value has a widget kind of its own.
- [`leaf_values`](fn.leaf_values.md#rustdoc-item-689) — Returns the current value of each leaf of a grouped row, in the row's own
- [`queue_element_edit`](fn.queue_element_edit.md#rustdoc-item-695) — Queues one array-element edit for every target, as one recorded step.
- [`queue_field_edit`](fn.queue_field_edit.md#rustdoc-item-693) — Queues one field edit for **every** selected entity that carries the
- [`record_row_placement`](fn.record_row_placement.md#rustdoc-item-686) — Records `rect` as `key`'s placement and returns it when the log has not
- [`reference_button_width`](fn.reference_button_width.md#rustdoc-item-604) — The width a reference row's main button takes: what is left after
- [`remember_asset_row_rect`](fn.remember_asset_row_rect.md#rustdoc-item-688) — Logs an asset row's rectangle once per placement, keyed by
- [`remember_asset_row_text`](fn.remember_asset_row_text.md#rustdoc-item-687) — Records the text an asset row draws and answers whether it changed since
- [`remember_entity_row_rect`](fn.remember_entity_row_rect.md#rustdoc-item-684) — Logs an entity row's rectangle once per placement, keyed by
- [`remember_entity_row_text`](fn.remember_entity_row_text.md#rustdoc-item-683) — Records the text an entity row draws and answers whether it changed since
- [`row_is_mixed`](fn.row_is_mixed.md#rustdoc-item-696) — Returns whether the selected entities disagree on this row's value.
- [`row_label`](fn.row_label.md#rustdoc-item-692) — Returns the label a row draws, with a `(mixed)` mark when the selection
- [`side_button_size`](fn.side_button_size.md#rustdoc-item-603) — The size every small button beside a reference row's button is drawn at,
- [`slot_width_within`](fn.slot_width_within.md#rustdoc-item-703) — The width each of `components` slots gets in `width` points, after the gap
- [`vector_row`](fn.vector_row.md#rustdoc-item-701) — Draws a vector row: the label, then one axis letter and field per
- [`vector_slot_width`](fn.vector_slot_width.md#rustdoc-item-586) — Returns the width of one component's slot in a vector row: the control
- [`vector_slots`](fn.vector_slots.md#rustdoc-item-702) — Draws `components` slots across the width left in the row, each an axis

### Constants
- [`ASSET_PICKER_HEIGHT`](constant.ASSET_PICKER_HEIGHT.md#rustdoc-item-605) — Height an asset or entity picker's list scrolls within.
- [`ASSET_ROW_CLEAR_WIDTH`](constant.ASSET_ROW_CLEAR_WIDTH.md#rustdoc-item-602) — Width of each small button beside a reference row's button (clear, pick).

### Macros
- [`log_row_once`](macro.log_row_once.md#rustdoc-item-676) — Logs one drawn Inspector row's line, once per row.
