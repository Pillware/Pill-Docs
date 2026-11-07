<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3502"></a>

# Module `pill_engine_core::component_registry`

Source: `engine\pill_engine_core\src\component_registry.rs:1`

Compile-time field layouts of components and value types, emitted by the
derive macros.
Compile-time field layouts of components and value types.

## Responsibilities

- Declare [`ComponentFieldDescriptor`], the description of one component or
  value-type field. The derive macros emit it, the world keeps it for the
  editor, and the host reads it to generate the C# mirror.
- Declare [`FieldDecorator`](../asset_import_registry/enum.FieldDecorator.md#rustdoc-item-1666), the presentation metadata a field declares
  for the editor's Inspector.
- Declare the [`ComponentLayout`] trait the derives implement, and
  [`ValueTypeLayoutResolver`], the function the world calls to find the
  layout of a value type that a component field nests.

## Design

The registries the derives submit into (`PillComponentDescriptor` and the
other descriptor types) live in `pill_engine`, the facade crate every
project and extension depends on, not here. The facade is compiled into
every DLL, so each DLL's registry holds exactly what that DLL declared.
This crate holds only the definitions that are the same for all of them.

## Module contents

### Structs
- [`ComponentFieldDescriptor`](struct.ComponentFieldDescriptor.md#rustdoc-item-2695) — One named field of a component or a value type: its name, its type tag and

### Enums
- [`FieldDecorator`](enum.FieldDecorator.md#rustdoc-item-3167) — Presentation metadata a field declares for the editor's Inspector.

### Traits
- [`ComponentLayout`](trait.ComponentLayout.md#rustdoc-item-2734) — The compile-time field layout of a type, as the derive macros emit it.

### Functions
- [`resolve_unique_name`](fn.resolve_unique_name.md#rustdoc-item-3501) — Returns the candidate name a `struct:<path>` field tag refers to.

### Type aliases
- [`ValueTypeLayoutResolver`](type.ValueTypeLayoutResolver.md#rustdoc-item-3500) — A function that finds the field layout of a `#[derive(PillMirror)]` value
