<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-579"></a>

# Module `pill_editor_shell_egui_editor::shell::tab_inspector`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_inspector.rs:1`

The [`tab_inspector`](#rustdoc-item-579) module: the inspector tab: the selection's components and their rows.
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
- [`addable_components`](fn.addable_components.md#rustdoc-item-575) — Returns the components the entity can still take: every registered one
- [`entity_inspector`](fn.entity_inspector.md#rustdoc-item-576) — Draws one entity's components as collapsible sections. Each one has a
- [`inspector_add_popup`](fn.inspector_add_popup.md#rustdoc-item-574) — Draws the Add Component popup, opened under the `+` button. It lists every
- [`inspector_header`](fn.inspector_header.md#rustdoc-item-573) — Draws the Inspector's top row: the selected entity's name, and the Add
- [`inspector_section_header`](fn.inspector_section_header.md#rustdoc-item-578) — Draws one component section's header bar: the foldout caret, the
- [`inspector_tab`](fn.inspector_tab.md#rustdoc-item-572) — Draws the Inspector tab: the selected entity's components as collapsible
- [`inspector_targets`](fn.inspector_targets.md#rustdoc-item-577) — Returns the entities one component's edit reaches: the primary first, then

### Constants
- [`INSPECTOR_VECTOR_FIELD_HEIGHT`](constant.INSPECTOR_VECTOR_FIELD_HEIGHT.md#rustdoc-item-571) — The height of one vector field, in points. The field's editor and the group
- [`INSPECTOR_VECTOR_FIELD_WIDTH`](constant.INSPECTOR_VECTOR_FIELD_WIDTH.md#rustdoc-item-569) — The width of one vector element's group, in points: the axis letter and
- [`INSPECTOR_VECTOR_LABEL_WIDTH`](constant.INSPECTOR_VECTOR_LABEL_WIDTH.md#rustdoc-item-570) — The width of the slot that holds an axis letter inside its group, in
