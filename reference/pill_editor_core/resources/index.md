<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6614"></a>

# Module `pill_editor_core::resources`

Source: `editor\pill_editor_core\src\resources.rs:1`

The world resources the Inspector can show and edit.
The resources the editor lets a person inspect and edit.

## Responsibilities

- List the world resources that are *editable*: the engine keeps no
  resource reflection, so a resource joins this list by having a curated
  field table beside it (the gizmo settings' is
  [`crate::gizmo::RESOURCE_FIELDS`](../gizmo/constant.RESOURCE_FIELDS.md#rustdoc-item-3816)).
- Expose, per resource, its label and the field table the Inspector reads
  and the write path goes through.

## Design

Each resource's field table is the single source of the row order, the
labels and the field names a write goes through, so the tab cannot offer a
field the write path would refuse. Adding a resource is one entry here
plus its own read/write table, the same shape the gizmo's table has.

## Module contents

### Structs
- [`ResourceEntry`](struct.ResourceEntry.md#rustdoc-item-6579) — One editable world resource.

### Functions
- [`entry`](fn.entry.md#rustdoc-item-6613) — The entry for the resource called `name`, when the list holds one.

### Constants
- [`EDITABLE_RESOURCES`](constant.EDITABLE_RESOURCES.md#rustdoc-item-2488) — The resources the Inspector can show, in list order.
