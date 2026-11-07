<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-378"></a>

# Module `pill_editor_shell_egui_editor::shell::resource_section`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\resource_section.rs:1`

The [`resource_section`] module: the Inspector's rows for one editable
world resource.
The Inspector's resource section: the rows of one editable world resource.

## Responsibilities

- [`resource_section`]: draw the resource's heading and note, then one row
  per editable field, through the row and scalar controls the component
  rows use.
- [`queue_edit`]: queue one field write as a recorded `SetResourceField`.

## Design

The snapshot builds the rows from the resource's curated field table,
listed in `pill_editor_core::resources`, which is the same table the write
path uses. The tab can therefore never show a field a write would refuse.
Each commit becomes one recorded command, which is what makes a resource
edit undoable like any other edit.

## Module contents

### Functions
- [`queue_edit`](fn.queue_edit.md#rustdoc-item-377) — Queues one field write as a recorded `SetResourceField`.
- [`resource_section`](fn.resource_section.md#rustdoc-item-376) — Draws one editable resource: the resource's label as a heading, a note that
