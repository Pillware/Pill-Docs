<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8625"></a>

# Module `pill_engine_core::type_names`

Source: `engine\pill_engine_core\src\type_names.rs:1`

Type names as the rest of the engine sees them: `pill_engine::...` for the
engine's own types.
Type names for the engine's own types, written under the public crate name.

## Responsibilities

- [`stable_type_name`](fn.stable_type_name.md#rustdoc-item-3010): the type name
  the engine stores as data. A component or a persisted resource registers
  under it unless it declares a shared name of its own.

## Design

The engine's code lives in `pill_engine_core`, so `std::any::type_name`
reports one of its types as
`pill_engine_core::common_components::TransformComponent`. Code outside the
engine names the same type by the public path,
`pill_engine::common_components::TransformComponent`. C# projects import
the namespace `pill_engine.common_components`, and the component names and
persisted keys the managed side receives are spelled that way.
[`stable_type_name`](fn.stable_type_name.md#rustdoc-item-3010) produces the
public form by writing the core's crate name as `pill_engine`.

A type outside the engine keeps the name `std::any::type_name` gives it,
and no allocation is made for it. A rewritten name is built once per
distinct type name and kept for the rest of the program's life.

## Module contents

### Functions
- [`rewritten_type_name`](fn.rewritten_type_name.md#rustdoc-item-8627) — The rewritten form of a core type name, built once per distinct name.
- [`stable_type_name`](fn.stable_type_name.md#rustdoc-item-3010) — [`std::any::type_name`] of `T`, with every `pill_engine_core::` path

### Constants
- [`CORE_CRATE_PREFIX`](constant.CORE_CRATE_PREFIX.md#rustdoc-item-8624) — The crate prefix [`std::any::type_name`] gives the engine's own types.
- [`PUBLIC_CRATE_PREFIX`](constant.PUBLIC_CRATE_PREFIX.md#rustdoc-item-8626) — The crate prefix a type is reported under outside the engine.
