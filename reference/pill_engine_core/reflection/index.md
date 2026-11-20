<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7580"></a>

# Module `pill_engine_core::reflection`

Source: `engine\pill_engine_core\src\reflection\mod.rs:1`

The reflection group: the field layouts the derive macros emit, the
type-erased field access built on them, and the public type names. Its
modules keep their old crate-root paths through the re-exports below.
What the engine knows about a value's shape without naming its type.

## Responsibilities

- Declare the field layouts the derive macros emit, and the resolvers that
  find the layout of a nested value type ([`component_registry`](component_registry/index.md#rustdoc-item-7368)).
- Read and write one field of a component row through that layout
  ([`component_field`](component_field/index.md#rustdoc-item-5515)).
- Spell a type's public name, `pill_engine::...`, for anything the engine
  stores as data ([`type_names`](type_names/index.md#rustdoc-item-7575)).

## Design

Each module keeps its old crate-root path: the crate re-exports every one of
them (`pub use reflection::{component_field, …}` in `lib.rs`), so moving a
file into this group changes no caller - not the facade's glob re-export and
not a `crate::type_names::stable_type_name` path inside the crate.

Nothing here registers anything. The derives write their layouts into the
facade's per-DLL registries; this group holds the types those registries and
the world share, plus the code that walks a layout.

## Module contents

### Modules
- [`component_field`](component_field/index.md#rustdoc-item-5515) — Generic type-erased component field access for editor-style tools.
- [`component_fields`](component_fields/index.md#rustdoc-item-7369) — The generated field enums: a component's fields named in code, and the
- [`component_registry`](component_registry/index.md#rustdoc-item-7368) — Compile-time field layouts of components and value types, emitted by the
- [`type_names`](type_names/index.md#rustdoc-item-7575) — Type names as the rest of the engine sees them: `pill_engine::...` for the
