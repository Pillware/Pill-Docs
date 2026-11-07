<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-110"></a>

# Module `pill_engine_core::archetype`

Source: `engine\pill_engine_core\src\archetype.rs:1`

Archetype-based component storage with structure-of-arrays layout.
Archetype-based component storage with SoA layout.

An archetype is a unique combination of component types. All entities with
the same set of components are stored together in one archetype, so
iterating them stays cache-friendly.

## Responsibilities

- Group entities by their exact component set into [`Archetype`] instances.
- Own the contiguous, type-erased component storage for each archetype,
  for native and layout-described components alike: every column is a
  `ComponentColumn`, held in the archetype's `ComponentColumns`.
- Track change-detection [`ComponentTicks`](../component/struct.ComponentTicks.md#rustdoc-item-535) for every component instance.

## Design

Components of one type are stored contiguously in memory: a structure of
arrays rather than an array of structures. Iterating every entity with
`Position + Velocity` therefore reads the entity array and one array per
component, in sequence. Reading all components of one entity instead costs
one lookup per component, and bulk iteration makes that rare.

Entity removal uses swap-remove to keep the arrays dense. The removed row is
replaced by the last row of each component array, the arrays shrink by one
row, and the moved entity's location is updated. Removal stays O(1) and
leaves no gaps.

## Invariants

The raw-byte storage rests on four rules, each enforced at the boundary
that can check it:

- **Element identity.** [`ColumnIdentity`] records how much the compiler
  can still check about a column: an exact `TypeId` (native), size and
  alignment plus the registry's field-layout comparison (shared), or no Rust
  type at all (descriptor). The typed accessors enforce the first two, and
  [`ComponentColumn::get`] panics on a mismatch. A descriptor column has no
  typed reading, because no Rust type names its rows.
- **Allocation alignment.** A column's buffer is allocated with the row's
  alignment, so every row is aligned for the type the column was built for.
  Registration refuses a shared component whose layout changed, unless the
  registering generation replaces the old one. Otherwise rows spawned into
  the old column would be read through the incoming type at the old stride.
- **Release through the ops table.** Everything that depends on what the
  bytes mean goes through [`ColumnOps`], a plain-data table that a reload
  refreshes before any row is touched. `drop_range` releases a row exactly
  once - on `swap_remove_discard` and on `Drop` - and never runs for a
  column whose `trivial_drop` is set. A [`Blittability`] value records the
  proof that a component's rows are plain data, so that claim is checked
  instead of assumed.
- **Row lifecycle.** `len` counts initialized rows. Growth leaves the new
  tail uninitialized until a write fills it, and `swap_remove` moves the
  tail row over the hole before lowering the length, so no row is read or
  dropped twice.

## Module contents

### Structs
- [`Archetype`](struct.Archetype.md#rustdoc-item-84) — Core storage unit grouping entities with the same component set.
- [`ArchetypeId`](struct.ArchetypeId.md#rustdoc-item-618) — ArchetypeId uniquely identifies an archetype by its component mask.
- [`Blittability`](struct.Blittability.md#rustdoc-item-111) — Proof that a descriptor component's rows are plain old data.
- [`ColumnLayout`](struct.ColumnLayout.md#rustdoc-item-81) — Runtime layout for a component whose concrete type belongs to another
- [`ColumnOps`](struct.ColumnOps.md#rustdoc-item-168) — Per-type behaviour for one column, as plain data.
- [`ComponentColumn`](struct.ComponentColumn.md#rustdoc-item-78) — Aligned, densely packed, type-erased storage for one component's rows.
- [`ComponentColumns`](struct.ComponentColumns.md#rustdoc-item-77) — The component columns of one archetype, keyed by [`ComponentId`].
- [`FieldPlan`](struct.FieldPlan.md#rustdoc-item-438) — A byte-level plan for moving rows from one layout of a component to another.
- [`LayoutField`](struct.LayoutField.md#rustdoc-item-320) — One top-level field of a layout, as a migration plan sees it.
- [`NativeColumnInfo`](struct.NativeColumnInfo.md#rustdoc-item-76) — Everything an archetype needs to build a column for a Rust component type,
- [`PlannedField`](struct.PlannedField.md#rustdoc-item-399) — One instruction in a migration plan.

### Enums
- [`ColumnIdentity`](enum.ColumnIdentity.md#rustdoc-item-205) — What a column requires of a `T` before it will hand out a typed reference.
- [`FieldSource`](enum.FieldSource.md#rustdoc-item-361) — Where one field of a new layout takes its bytes from.
- [`StorageFactory`](enum.StorageFactory.md#rustdoc-item-85) — Strategy for creating component storage for a specific component type.

### Functions
- [`drop_range_of`](fn.drop_range_of.md#rustdoc-item-710) — Drops `row_count` values of type `T` starting at `rows_ptr`.
- [`drop_range_of_nothing`](fn.drop_range_of_nothing.md#rustdoc-item-709) — Drops nothing: the element type owns no resources.
- [`missing_column`](fn.missing_column.md#rustdoc-item-708) — Reports a lookup for a column the archetype does not have.
- [`out_of_bounds`](fn.out_of_bounds.md#rustdoc-item-707) — Whether `bytes` written at `offset` runs past the end of a row of `size`
- [`unallocated_pointer`](fn.unallocated_pointer.md#rustdoc-item-706) — A non-null, correctly aligned pointer for a column that owns no allocation.
- [`validate_component_layout`](fn.validate_component_layout.md#rustdoc-item-705) — Checks that a size and alignment can describe a descriptor component layout.
- [`validate_native_component_layout`](fn.validate_native_component_layout.md#rustdoc-item-284) — Checks that a size and alignment can describe a native component layout.
