<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3172"></a>

# Module `pill_engine_core::component_field::row`

Visibility: `{'restricted': {'parent': 3105, 'path': '::component_field'}}` · Source: `engine\pill_engine_core\src\component_field\row.rs:1`

Finds, reads and writes single fields of a component row.

## Responsibilities

- Resolve a component's field to a live row: the entity's own archetype, its
  column, and the byte range a field occupies there.
- Read one field or every field of a row as [`FieldValue`](../enum.FieldValue.md#rustdoc-item-3110),
  and write one back, stamping the row's `changed` tick so `Changed<T>`
  observes the edit next frame.
- Report every refusal as a [`ComponentFieldError`](../enum.ComponentFieldError.md#rustdoc-item-3164)
  that names the component, and the field when it is known, without handing
  a raw pointer out.

## Design

Every entry point that targets a live entity resolves the component through
that entity's own archetype. That archetype is the one place that names the
generation which created the data, while a lookup by name across the whole
registry can see several registrations under one name.
[`World::build_component_image`](../../world/struct.World.md#rustdoc-item-3256) has no entity yet, so it is the one entry
point that resolves through the registry.

Values are validated against the registered layout before anything is
written, and a refused write leaves the row untouched.

## Module contents

### Structs
- [`FieldWrite`](struct.FieldWrite.md#rustdoc-item-3163) — A validated byte payload and where in the component row it belongs.
- [`ResolvedField`](struct.ResolvedField.md#rustdoc-item-3177) — The archetype, row, component id and field descriptor of one field.
- [`RowWriteTarget`](struct.RowWriteTarget.md#rustdoc-item-3206) — The row one field write targets, and the names its refusals report.

### Functions
- [`format_component_debug`](fn.format_component_debug.md#rustdoc-item-3255) — Formats a copied component row for native debugger helpers.
