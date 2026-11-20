<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-798"></a>

# Module `pill_editor_shell::shell::inspector_widgets`

Source: `editor\pill_editor_shell\src\shell\inspector_widgets.rs:1`

The [`inspector_widgets`](#rustdoc-item-798) module: the inspector's field controls.
The Inspector's field controls.

## Responsibilities

- `FieldEditResponse`: what one control reports for a frame - the value and
  the interaction phase it belongs to.
- `scalar_edit_decorated`: one field's editor, drawn in the form the row
  model asked for. It returns the edit and leaves committing it to the
  caller.
- `Number` and `integer_edit`: the editor every whole-number kind shares,
  in its slider and drag-value forms.
- `axis_slot` and `fixed_width_field`: a vector component's axis letter and
  its editor. Both use a fixed width, so a long value is cropped inside its
  field instead of widening the row.
- `enum_edit`: a declared enum's variant dropdown.
- `scalar_edit`, `ascending` and `component_rows`: the plain editor, bounds
  put in ascending order, and a component's fields as plain display rows.
- The read-only row and the value formatters, which the inspector's rows
  and the asset settings rows draw.

The two glob imports below use the package's absolute path, so a patch
crate resolves them too.

## Module contents

### Structs
- [`FieldEditResponse`](struct.FieldEditResponse.md#rustdoc-item-710) — What one field control reports for a frame.
- [`Number`](struct.Number.md#rustdoc-item-756) — One whole number seen through `f64`, with the way back into its own

### Functions
- [`ascending`](fn.ascending.md#rustdoc-item-791) — Returns the two bounds in ascending order. A decorator pair written the
- [`axis_slot`](fn.axis_slot.md#rustdoc-item-786) — Draws the axis letter of one vector component in its fixed-width slot. The
- [`component_rows`](fn.component_rows.md#rustdoc-item-797) — Returns the Inspector's rows for `detail`: one (type name, field rows) pair
- [`continuous_edit`](fn.continuous_edit.md#rustdoc-item-750) — Turns a continuous control's response into the edit it reports.
- [`enum_edit`](fn.enum_edit.md#rustdoc-item-794) — Draws a declared enum's dropdown, listing the variants its field tag
- [`fill_slider_width`](fn.fill_slider_width.md#rustdoc-item-790) — Sizes the next slider's track so the track and its value box together fill
- [`fixed_width_field`](fn.fixed_width_field.md#rustdoc-item-787) — Draws the editor for one vector component at the width left in its group.
- [`format_field_value`](fn.format_field_value.md#rustdoc-item-796) — Returns a field value as display text. Kinds without their own formatting
- [`integer_edit`](fn.integer_edit.md#rustdoc-item-792) — Draws the whole-number editor for `number`: a slider over `range`, or a
- [`one_shot_edit`](fn.one_shot_edit.md#rustdoc-item-751) — Turns a one-shot control's response into the edit it reports.
- [`read_only_row`](fn.read_only_row.md#rustdoc-item-795) — Draws one read-only (name, value) row: the shared label column, then the
- [`scalar_edit`](fn.scalar_edit.md#rustdoc-item-793) — Draws the editor for one scalar field: a checkbox for a boolean, a drag
- [`scalar_edit_decorated`](fn.scalar_edit_decorated.md#rustdoc-item-785) — Draws the editor for one scalar field, as the widget the row model chose:
- [`stretched_drag_value`](fn.stretched_drag_value.md#rustdoc-item-788) — Adds a drag value that spans the whole width left in the row, the way every
