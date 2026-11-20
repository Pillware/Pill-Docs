<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7575"></a>

# Module `pill_engine_core::reflection::type_names`

Source: `engine\pill_engine_core\src\reflection\type_names.rs:1`

Type names as the rest of the engine sees them: `pill_engine::...` for the
engine's own types.
Type names as the engine stores them: the crate, then the type.

## Responsibilities

- [`stable_type_name`](fn.stable_type_name.md#rustdoc-item-997): the type name
  the engine stores as data. A component or a persisted resource registers
  under it unless it declares a shared name of its own.
- [`crate_qualified_name`](fn.crate_qualified_name.md#rustdoc-item-7577): the
  same rule applied to a name given as text.
- [`names_same_type`](fn.names_same_type.md#rustdoc-item-7572): whether a name
  read back from a file (a scene's component key, an asset's `asset_type`)
  names a given type, including a name written before the rule existed.

## Design

A stored type name is `<crate>::<Type>`: the crate the type is compiled in,
then the type's own name, with every module in between left out. Moving a
type to another file therefore never renames it, and the declaring macros
build the same string at compile time from `CARGO_CRATE_NAME`. Type names
are unique within a crate, which is what keeps the short form unambiguous.

The engine's code lives in `pill_engine_core`, while code outside the
engine names it through `pill_engine`, so the core's crate is written as
`pill_engine`: `TransformComponent`'s Rust path
`pill_engine_core::ecs::common_components::TransformComponent` is stored as
`pill_engine::TransformComponent`. A generic argument follows the same rule
(`alloc::Vec<pill_engine::TransformComponent>`).

Names used to keep the module path, so files written earlier carry the
longer form (`pill_physics::components::RigidBodyComponent`). Every current
name has exactly two segments, so a stored name with more is one of those,
and [`names_same_type`](fn.names_same_type.md#rustdoc-item-7572) reads it as its
first and last segment.

A shortened name is built once per distinct type name and kept for the rest
of the program's life; a name that is already short is returned as it is.

## Module contents

### Functions
- [`crate_qualified_name`](fn.crate_qualified_name.md#rustdoc-item-7577) — `type_name` with every path in it written as `<crate>::<last segment>`,
- [`interned_short_name`](fn.interned_short_name.md#rustdoc-item-7579) — The short form of `type_name`, worked out once per distinct name.
- [`names_same_type`](fn.names_same_type.md#rustdoc-item-7572) — Whether `stored`, a type name read back from a file, names the type whose
- [`push_short_path`](fn.push_short_path.md#rustdoc-item-7578) — Appends the short form of one path to `output`. Returns whether the short
- [`stable_type_name`](fn.stable_type_name.md#rustdoc-item-997) — [`std::any::type_name`] of `T` in the stored form: every path in it written

### Constants
- [`CORE_CRATE_NAME`](constant.CORE_CRATE_NAME.md#rustdoc-item-7574) — The crate name [`std::any::type_name`] gives the engine's own types.
- [`PUBLIC_CRATE_NAME`](constant.PUBLIC_CRATE_NAME.md#rustdoc-item-7576) — The crate name the engine's own types are stored under.
