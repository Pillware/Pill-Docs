<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-601"></a>

# Module `pill_editor_shell::shell::tab_inspector`

Source: `editor\pill_editor_shell\src\shell\tab_inspector.rs:1`

The [`tab_inspector`](#rustdoc-item-601) module: the inspector tab: the selection's components and their rows.
The Inspector tab: the selection's components and their rows.

## Responsibilities

- `inspector_tab` and its header: the selected entity's name and the Add
  Component popup.
- `entity_inspector` and its section headers: one collapsible section per
  component, with the rows the inspector's row model asks for.
- `addable_components`: the components the Add popup and the component menu
  offer.
- The vector row metrics (`INSPECTOR_VECTOR_FIELD_WIDTH`,
  `INSPECTOR_VECTOR_LABEL_WIDTH`, `INSPECTOR_VECTOR_FIELD_HEIGHT`) the
  field rows size each axis group with.

The globs below are absolute paths, so a patch crate resolves them too.

## Module contents

### Functions
- [`addable_components`](fn.addable_components.md#rustdoc-item-597) — Returns the components the entity can still take: every registered one
- [`entity_inspector`](fn.entity_inspector.md#rustdoc-item-598) — Draws one entity's components as collapsible sections. Each one has a
- [`inspector_add_popup`](fn.inspector_add_popup.md#rustdoc-item-596) — Draws the Add Component popup, opened under the `+` button. It lists every
- [`inspector_header`](fn.inspector_header.md#rustdoc-item-595) — Draws the Inspector's top row: the selected entity's name, and the Add
- [`inspector_section_header`](fn.inspector_section_header.md#rustdoc-item-600) — Draws one component section's header: a separator line across the panel,
- [`inspector_tab`](fn.inspector_tab.md#rustdoc-item-594) — Draws the Inspector tab: the selected entity's components as collapsible
- [`inspector_targets`](fn.inspector_targets.md#rustdoc-item-599) — Returns the entities one component's edit reaches: the primary first, then

### Constants
- [`INSPECTOR_VECTOR_FIELD_HEIGHT`](constant.INSPECTOR_VECTOR_FIELD_HEIGHT.md#rustdoc-item-593) — The height of one vector field, in points: the shared row height, so a
- [`INSPECTOR_VECTOR_FIELD_WIDTH`](constant.INSPECTOR_VECTOR_FIELD_WIDTH.md#rustdoc-item-587) — A vector element's group in a typical panel, in points: the axis letter and
- [`INSPECTOR_VECTOR_LABEL_WIDTH`](constant.INSPECTOR_VECTOR_LABEL_WIDTH.md#rustdoc-item-588) — The width of the slot that holds an axis letter inside its group, in
- [`SECTION_LINE_GAP`](constant.SECTION_LINE_GAP.md#rustdoc-item-592) — The space in points between a component's separator line and its header.
- [`VECTOR_OWN_LINE_INDENT`](constant.VECTOR_OWN_LINE_INDENT.md#rustdoc-item-590) — How far a vector's own line of components is indented, in points, so it
- [`VECTOR_SLOT_GAP`](constant.VECTOR_SLOT_GAP.md#rustdoc-item-591) — The space in points the row leaves after each vector component's slot.
- [`VECTOR_SLOT_MIN_WIDTH`](constant.VECTOR_SLOT_MIN_WIDTH.md#rustdoc-item-589) — The narrowest a vector component's slot (its axis letter and field) may be
