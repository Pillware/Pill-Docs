<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8657"></a>

# Module `pill_engine_core::world::components`

Visibility: `{'restricted': {'parent': 8658, 'path': '::world'}}` · Source: `engine\pill_engine_core\src\world\components.rs:1`

Component registration, storage access, and per-entity attachment.

## Responsibilities

- Registers the three kinds of component type - a Rust type, a type shared
  between DLLs, and a layout described at runtime by a managed manifest -
  and keeps the storage description a reload replaces.
- Reshapes and re-homes live columns across a reload: a relayout rewrites a
  column's rows in a new shape, a remap moves them to a successor
  registration, and the re-homing pass points every column's function table
  at code that is still mapped.
- Reads and writes one entity's component, and adds or removes one, which
  moves the entity to a different archetype.

## Design

Registration is data, not code. A component's storage description is a
layout plus a table of function pointers, never a closure compiled into the
DLL that registered it. That is what lets a column outlive its DLL: the
table is replaced on reload instead of staying behind in the old image. The
three kinds differ only in what proves a row holds the right type - an exact
`TypeId`, an identity derived from a name, or a validated layout - and all
three use the same column type.

## Module contents

### Structs
- [`ColumnChunk`](struct.ColumnChunk.md#rustdoc-item-8633) — One archetype's raw rows of one component, as a language binding reads them.
