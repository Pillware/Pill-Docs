<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-718"></a>

# Module `pill_editor_shell_egui_editor::shell::inspector_widgets`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_widgets.rs:1`

The [`inspector_widgets`](#rustdoc-item-718) module: the inspector's field controls.
The Inspector's field controls.

## Responsibilities

- `scalar_edit_decorated`: one field's editor, drawn in the form the row
  model asked for. It returns the edited value and leaves committing it to
  the caller.
- `Number` and `integer_edit`: the editor every whole-number kind shares,
  in its slider and drag-value forms.
- `axis_slot` and `fixed_width_field`: a vector component's axis letter and
  its editor. Both use a fixed width, so a long value is cropped inside its
  field instead of widening the row.
- `scalar_edit`, `ascending` and `component_rows`: the plain editor, bounds
  put in ascending order, and a component's fields as plain display rows.
- The read-only row and the value formatters, which the inspector's rows
  and the asset settings rows draw.

The two glob imports below use the package's absolute path, so a patch
crate resolves them too.

## Module contents

### Structs
- [`Number`](struct.Number.md#rustdoc-item-680) — One whole number seen through `f64`, with the way back into its own

### Functions
- [`ascending`](fn.ascending.md#rustdoc-item-712) — Returns the two bounds in ascending order. A decorator pair written the
- [`axis_slot`](fn.axis_slot.md#rustdoc-item-710) — Draws the axis letter of one vector component in its fixed-width slot. The
- [`component_rows`](fn.component_rows.md#rustdoc-item-717) — Returns the Inspector's rows for `detail`: one (type name, field rows) pair
- [`fixed_width_field`](fn.fixed_width_field.md#rustdoc-item-711) — Draws the editor for one vector component at the width left in its group.
- [`format_field_value`](fn.format_field_value.md#rustdoc-item-716) — Returns a field value as display text. Kinds without their own formatting
- [`integer_edit`](fn.integer_edit.md#rustdoc-item-713) — Draws the whole-number editor for `number`: a slider over `range`, or a
- [`read_only_row`](fn.read_only_row.md#rustdoc-item-715) — Draws one read-only (name, value) row: the shared label column, then the
- [`scalar_edit`](fn.scalar_edit.md#rustdoc-item-714) — Draws the editor for one scalar field: a checkbox for a boolean, a drag
- [`scalar_edit_decorated`](fn.scalar_edit_decorated.md#rustdoc-item-709) — Draws the editor for one scalar field, as the widget the row model chose:
