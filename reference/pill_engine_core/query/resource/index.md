<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7057"></a>

# Module `pill_engine_core::query::resource`

Visibility: `{'restricted': {'parent': 6743, 'path': '::query'}}` · Source: `engine\pill_engine_core\src\query\resource.rs:1`

[`Res`](struct.Res.md#rustdoc-item-1163) and [`ResMut`](struct.ResMut.md#rustdoc-item-7091) system parameters for resource access in systems.

## Responsibilities

- Provides [`Res<T>`](struct.Res.md#rustdoc-item-1163) to read the world's one value of type `T` from a system.
- Provides [`ResMut<T>`](struct.ResMut.md#rustdoc-item-7091) to read and write that value, with change tracking.

## Design

These types implement [`SystemParam`](../../system/trait.SystemParam.md#rustdoc-item-2656), so a
system can take them as parameters. The scheduler records which resources
each system reads and writes, so two systems that would conflict on one
resource never run at the same time.

## Module contents

### Structs
- [`Res`](struct.Res.md#rustdoc-item-1163) — Immutable resource access for systems.
- [`ResMut`](struct.ResMut.md#rustdoc-item-7091) — Mutable resource access for systems, with change tracking.
