<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7369"></a>

# Module `pill_engine_core::reflection::component_fields`

Source: `engine\pill_engine_core\src\reflection\component_fields.rs:1`

The generated field enums: a component's fields named in code, and the
traits that connect an enum to its component type.
A component's fields, named in code.

## Responsibilities

- Declare [`ComponentFieldId`]: what a component's generated `<Type>Field`
  enum answers about its fields.
- Declare [`ComponentFields`]: the link from a component type to the field
  enum `#[derive(PillComponent)]` generates for it.

## Design

The field layer identifies a field by its descriptor's name (see
[`component_registry`](../component_registry/index.md#rustdoc-item-7368)): the editor's commands,
scene files and the C# mirror all carry strings. The generated enum is the
code-side view of the same list, so a typed editor callback can name a
field instead of comparing strings, while [`ComponentFieldId::from_name`]
bridges back from a queued command. The enum is generated in the declaring
artifact, so no table is kept in sync by hand.

## Module contents

### Traits
- [`ComponentFieldId`](trait.ComponentFieldId.md#rustdoc-item-7365) — One field of a component, named in code.
- [`ComponentFields`](trait.ComponentFields.md#rustdoc-item-7367) — A component type together with the field enum its derive generated.
