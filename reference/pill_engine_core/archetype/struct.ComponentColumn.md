<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-78"></a>

# Struct `pill_engine_core::archetype::ComponentColumn`

```rust
pub struct ComponentColumn;
```

Source: `engine\pill_engine_core\src\archetype.rs:740`

Aligned, densely packed, type-erased storage for one component's rows.

Owns a raw heap allocation whose element size and alignment come from a
[`ColumnLayout`](struct.ColumnLayout.md#rustdoc-item-81). Rows are written and read as raw bytes, which
lets components defined in other languages share storage with native ones.

## Fields

<a id="rustdoc-item-527"></a>

### `element_layout`

```rust
element_layout: ColumnLayout
```

Runtime layout of the stored element type.

<a id="rustdoc-item-528"></a>

### `ops`

```rust
ops: ColumnOps
```

Per-type behaviour, replaceable when a reload brings a newer table.

<a id="rustdoc-item-529"></a>

### `identity`

```rust
identity: ColumnIdentity
```

What a typed accessor must prove before it may read these rows.

<a id="rustdoc-item-530"></a>

### `row_buffer`

```rust
row_buffer: std::ptr::NonNull<u8>
```

Pointer to the heap allocation, or dangling before the first growth.

<a id="rustdoc-item-532"></a>

### `len`

```rust
len: usize
```

Number of initialized rows.

<a id="rustdoc-item-533"></a>

### `capacity`

```rust
capacity: usize
```

Number of rows the current allocation can hold.

<a id="rustdoc-item-534"></a>

### `ticks`

```rust
ticks: Vec<crate::component::ComponentTicks>
```

Change-detection metadata, one entry per row at the same index.

The column owns the ticks instead of keeping them beside it, so a push
grows both and a removal shrinks both, and there is only one length to
maintain. A tick is plain data with no code pointers, so it has none of
the [`ColumnOps`](struct.ColumnOps.md#rustdoc-item-168) lifetime concerns. It is a separate allocation rather
than interleaved with the rows, so iterating the component data keeps
the same locality.

## Associated functions and methods

<a id="rustdoc-item-536"></a>

### `new`

```rust
pub fn new(layout: ColumnLayout) -> Result<Self, WorldError>;
```

Creates an empty column for the given runtime layout.

Nothing is allocated until the first row is pushed. The column holds
plain data only: rows are copied as raw bytes and freed without running
destructors, so the layout must describe a blittable value type and
carry a [`Blittability`](struct.Blittability.md#rustdoc-item-111) proof. The layout is checked again here, in
every build profile.

#### Errors

Returns [`WorldError::DescriptorSizeZero`](../error/enum.WorldError.md#rustdoc-item-279),
[`WorldError::DescriptorAlignmentInvalid`](../error/enum.WorldError.md#rustdoc-item-280) or
[`WorldError::DescriptorLayoutInvalid`](../error/enum.WorldError.md#rustdoc-item-281).

<a id="rustdoc-item-537"></a>

### `new_native`

```rust
pub fn new_native<T: 'static>(schema_hash: u64, shared: bool) -> Result<Self, WorldError>;
```

Creates an empty column for a compile-time Rust element type.

The counterpart of [`Self::new`](#rustdoc-item-536): same buffer, same descriptor, but the
ops table is generated from `T` and typed accessors are allowed.

`shared` selects [`ColumnIdentity::Shared`](enum.ColumnIdentity.md#rustdoc-item-203), for a type compiled into
more than one binary. See that variant for what the caller must have
checked first.

#### Errors

As [`Self::new`](#rustdoc-item-536), when size and alignment cannot describe an allocation.

<a id="rustdoc-item-538"></a>

### `from_native_info`

```rust
pub fn from_native_info(column_info: NativeColumnInfo, schema_hash: u64) -> Result<Self, WorldError>;
```

Creates an empty column from a native description.

The non-generic twin of [`Self::new_native`](#rustdoc-item-537), for the archetype, which
builds columns from a registered factory and has no `T` in scope.

#### Errors

Returns [`WorldError::DescriptorAlignmentInvalid`](../error/enum.WorldError.md#rustdoc-item-280) or
[`WorldError::DescriptorLayoutInvalid`](../error/enum.WorldError.md#rustdoc-item-281) when size and alignment cannot
describe an allocation.

<a id="rustdoc-item-539"></a>

### `ops`

```rust
pub fn ops(self: &Self) -> ColumnOps;
```

The per-type table this column releases its rows through.

<a id="rustdoc-item-540"></a>

### `refresh_ops`

```rust
pub fn refresh_ops(self: &mut Self, ops: ColumnOps);
```

Points the column at a newer generation's table.

A column outlives the image that filled it, so its drop code has to be
pointed at code that is still mapped. Before dropping old rows, the
migration path also points it at the *retiring* generation's table, so
the code that allocated those rows is the code that releases them.

<a id="rustdoc-item-541"></a>

### `identity`

```rust
pub fn identity(self: &Self) -> ColumnIdentity;
```

What a typed accessor must prove before reading these rows.

<a id="rustdoc-item-542"></a>

### `assert_element_type`

```rust
pub(in archetype) fn assert_element_type<T: 'static>(self: &Self);
```

Panics unless `T` may be used to read this column's rows.

The check mirrors the identity's own promise: an exact `TypeId` for a
native column, layout equality for a shared one, and a panic for a
descriptor column, which has no typed reading.

<a id="rustdoc-item-543"></a>

### `len`

```rust
pub fn len(self: &Self) -> usize;
```

Returns the number of initialized rows in this column.

<a id="rustdoc-item-544"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether this column holds no rows.

<a id="rustdoc-item-545"></a>

### `element_size`

```rust
pub fn element_size(self: &Self) -> usize;
```

Returns the size in bytes of a single stored component instance.

<a id="rustdoc-item-546"></a>

### `alignment`

```rust
pub fn alignment(self: &Self) -> usize;
```

Returns the alignment in bytes required by a single stored instance.

<a id="rustdoc-item-547"></a>

### `schema_hash`

```rust
pub fn schema_hash(self: &Self) -> u64;
```

Returns the schema hash identifying the stored component type.

<a id="rustdoc-item-548"></a>

### `as_mut_ptr`

```rust
pub fn as_mut_ptr(self: &mut Self) -> *mut u8;
```

Returns a raw pointer to the underlying buffer.

The pointer is dangling before the first allocation and is invalidated
by any later reallocation or by dropping the column.

<a id="rustdoc-item-551"></a>

### `require_plain_data`

```rust
pub(in archetype) fn require_plain_data(self: &Self) -> Result<(), WorldError>;
```

Refuses a raw-byte write when this column's rows own resources.

The byte mutators below write rows with `memcpy` and never consult
[`ColumnOps::drop_range`](struct.ColumnOps.md#rustdoc-item-240). That is right for the plain data a descriptor
column stores, and wrong for a column whose element type has a
destructor: writing a row would leak the value it replaced. The
[`Self::take_row_from`](#rustdoc-item-549) move is exempt, because it transfers ownership
instead of creating a new one.

#### Errors

Returns [`WorldError::ColumnRowsAreNotPlainData`](../error/enum.WorldError.md#rustdoc-item-550) when the column's ops
table reports a non-trivial drop.

<a id="rustdoc-item-552"></a>

### `push_zeroed`

```rust
pub fn push_zeroed(self: &mut Self) -> Result<(), WorldError>;
```

Appends a zero-initialized row to this column.

Grows the column when needed and leaves the new row's bytes zeroed.

#### Errors

Returns [`WorldError::DescriptorLayoutInvalid`](../error/enum.WorldError.md#rustdoc-item-281) when the element layout
cannot describe the next allocation, or
[`WorldError::ColumnRowsAreNotPlainData`](../error/enum.WorldError.md#rustdoc-item-550) when the column's rows own
resources - see [`Self::require_plain_data`](#rustdoc-item-551).

<a id="rustdoc-item-554"></a>

### `push_bytes`

```rust
pub fn push_bytes(self: &mut Self, bytes: &[u8]) -> Result<(), WorldError>;
```

Appends a row containing a copy of the given bytes.

#### Errors

Returns [`WorldError::ColumnRowsAreNotPlainData`](../error/enum.WorldError.md#rustdoc-item-550) when the column's rows
own resources - see [`Self::require_plain_data`](#rustdoc-item-551) - or
[`WorldError::DescriptorSizeMismatch`](../error/enum.WorldError.md#rustdoc-item-553) when `bytes` does not contain
exactly `element_size()` bytes, or
[`WorldError::DescriptorLayoutInvalid`](../error/enum.WorldError.md#rustdoc-item-281) when the element layout cannot
describe the next allocation.

<a id="rustdoc-item-549"></a>

### `take_row_from`

```rust
pub fn take_row_from(self: &mut Self, source: &mut Self, index: usize) -> Result<(), WorldError>;
```

Moves the row at `index` out of `source` and appends it here.

This is how an entity changes archetype, and the only way a row moves
from one column to another. Ownership moves with the bytes: they are
copied here, and the source row is released **without** running its
destructor, because whatever it owned is now owned here. That is what
makes the move correct for a row that holds resources - a `Vec`, a
`String` - which the byte-copying mutators refuse.

Both halves happen in one call, so every row is dropped exactly once:
no intermediate state lets a caller forget the release or run it twice.
A move makes no plain-data claim, but it can still be the push that
grows this column. Call [`Self::reserve_row`](#rustdoc-item-555) first when a multi-column
move must not fail partway.

#### Errors

[`WorldError::DescriptorSizeMismatch`](../error/enum.WorldError.md#rustdoc-item-553) when the two columns differ in
element size, [`WorldError::DescriptorRowInvalid`](../error/enum.WorldError.md#rustdoc-item-444) when `index` is out of
bounds of `source`, and [`WorldError::DescriptorLayoutInvalid`](../error/enum.WorldError.md#rustdoc-item-281) when the
next allocation cannot be represented. Nothing is moved in any of those
cases.

<a id="rustdoc-item-555"></a>

### `reserve_row`

```rust
pub fn reserve_row(self: &mut Self) -> Result<(), WorldError>;
```

Reserves room for one more row, growing by the column's own policy.

A caller that moves a whole entity's row uses this to make every
destination column ready before it moves the first one, which makes a
multi-column move all-or-nothing. Prefer it over [`Self::reserve_rows`](#rustdoc-item-556)
for a single row: `reserve_rows` allocates the exact target, which would
defeat amortized growth if it ran on every archetype move.

#### Errors

Returns [`WorldError::DescriptorLayoutInvalid`](../error/enum.WorldError.md#rustdoc-item-281) when the doubled
capacity cannot be represented.

<a id="rustdoc-item-557"></a>

### `set_bytes`

```rust
pub fn set_bytes(self: &mut Self, index: usize, bytes: &[u8]) -> Result<(), WorldError>;
```

Overwrites the row at `index` with a copy of the given bytes.

#### Errors

Returns [`WorldError::ColumnRowsAreNotPlainData`](../error/enum.WorldError.md#rustdoc-item-550) when the column's rows
own resources - see [`Self::require_plain_data`](#rustdoc-item-551) - or
[`WorldError::DescriptorRowInvalid`](../error/enum.WorldError.md#rustdoc-item-444) when `index` is out of bounds or
`bytes` does not contain exactly `element_size()` bytes.

<a id="rustdoc-item-558"></a>

### `ticks`

```rust
pub fn ticks(self: &Self) -> &[ComponentTicks];
```

Change-detection metadata for every row, in row order.

<a id="rustdoc-item-559"></a>

### `ticks_mut`

```rust
pub fn ticks_mut(self: &mut Self) -> &mut [ComponentTicks];
```

Mutable change-detection metadata for every row, in row order.

<a id="rustdoc-item-560"></a>

### `row_ticks`

```rust
pub fn row_ticks(self: &Self, index: usize) -> Option<&ComponentTicks>;
```

Change-detection metadata for one row, or `None` when out of bounds.

<a id="rustdoc-item-561"></a>

### `row_ticks_mut`

```rust
pub fn row_ticks_mut(self: &mut Self, index: usize) -> Option<&mut ComponentTicks>;
```

Mutable change-detection metadata for one row, or `None` when out of
bounds.

<a id="rustdoc-item-562"></a>

### `set_row_ticks`

```rust
pub fn set_row_ticks(self: &mut Self, index: usize, ticks: ComponentTicks) -> bool;
```

Replaces one row's change-detection metadata.

Returns `false` when `index` names no row, so a caller that computed
the row elsewhere finds out rather than silently writing nothing.

<a id="rustdoc-item-563"></a>

### `row_ticks_mut_unchecked`

```rust
pub unsafe fn row_ticks_mut_unchecked(self: &mut Self, index: usize) -> &mut ComponentTicks;
```

Mutable change-detection metadata for one row, with no bounds check.

#### Safety

`index` must be in range, and no other reference to that row's ticks may
exist for the lifetime of the returned one. The query layer resolves the
bound once per archetype rather than per row, which is why this exists.

<a id="rustdoc-item-564"></a>

### `rows_and_ticks_mut`

```rust
pub fn rows_and_ticks_mut<T: 'static>(self: &mut Self) -> (&mut [T], &mut [ComponentTicks]);
```

The typed rows and their ticks, both mutable at once.

Rows and ticks are separate fields, so one call can hand out both
without the caller needing two independent borrows of the column - which
is what the language bindings need to expose writable component data.

#### Panics

If `T` is not this column's element type.

<a id="rustdoc-item-565"></a>

### `raw_rows_and_ticks_mut`

```rust
pub fn raw_rows_and_ticks_mut(self: &mut Self) -> (*mut u8, usize, &mut [ComponentTicks]);
```

The raw row buffer and the ticks beside it, both mutable at once.

The type-erased twin of [`Self::rows_and_ticks_mut`](#rustdoc-item-564), for the language
bindings that address rows as bytes. The pointer is valid only until the
column next grows or is dropped.

<a id="rustdoc-item-566"></a>

### `bytes`

```rust
pub fn bytes(self: &Self, index: usize) -> Option<&[u8]>;
```

Returns the raw bytes of the row at `index`, or `None` when out of bounds.

<a id="rustdoc-item-567"></a>

### `push`

```rust
pub fn push<T: 'static>(self: &mut Self, value: T);
```

Appends a typed value, growing the column when needed.

#### Panics

If `T` is not this column's element type, or the column cannot grow.
Growth failure panics instead of returning an error: a native column's
layout was validated at registration, so the only way to get here is a
capacity overflow, and the callers - command flush, migration, archetype
move - have no way to recover from that.

<a id="rustdoc-item-568"></a>

### `get`

```rust
pub fn get<T: 'static>(self: &Self, index: usize) -> &T;
```

Shared reference to one row, bounds- and type-checked.

#### Panics

If `T` is not this column's element type, or `index` is out of range.

<a id="rustdoc-item-569"></a>

### `get_mut`

```rust
pub fn get_mut<T: 'static>(self: &mut Self, index: usize) -> &mut T;
```

Mutable twin of [`Self::get`](#rustdoc-item-568).

#### Panics

As [`Self::get`](#rustdoc-item-568).

<a id="rustdoc-item-570"></a>

### `get_unchecked`

```rust
pub unsafe fn get_unchecked<T: 'static>(self: &Self, index: usize) -> &T;
```

Shared reference to one row with no checks.

#### Safety

`T` must be this column's element type and `index` must be in range.
The query layer resolves both once per archetype rather than per row,
which is why this exists.

<a id="rustdoc-item-571"></a>

### `get_mut_unchecked`

```rust
pub unsafe fn get_mut_unchecked<T: 'static>(self: &mut Self, index: usize) -> &mut T;
```

Mutable twin of [`Self::get_unchecked`](#rustdoc-item-570).

#### Safety

As [`Self::get_unchecked`](#rustdoc-item-570), and no other reference to the row may
exist for the lifetime of the returned one.

<a id="rustdoc-item-572"></a>

### `as_slice`

```rust
pub fn as_slice<T: 'static>(self: &Self) -> &[T];
```

The rows as a typed slice.

#### Panics

If `T` is not this column's element type.

<a id="rustdoc-item-573"></a>

### `as_mut_slice`

```rust
pub fn as_mut_slice<T: 'static>(self: &mut Self) -> &mut [T];
```

Mutable twin of [`Self::as_slice`](#rustdoc-item-572).

#### Panics

As [`Self::as_slice`](#rustdoc-item-572).

<a id="rustdoc-item-574"></a>

### `swap_remove`

```rust
pub fn swap_remove<T: 'static>(self: &mut Self, index: usize) -> T;
```

Removes one row by swapping the last row into its place and returns it.

#### Panics

If `T` is not this column's element type, or `index` is out of range.

<a id="rustdoc-item-556"></a>

### `reserve_rows`

```rust
pub fn reserve_rows(self: &mut Self, additional: usize) -> Result<(), WorldError>;
```

Reserves capacity for at least `additional` more rows.

Allocates the exact target rather than doubling toward it: a caller
that says how many rows are coming knows better than the growth policy.

#### Errors

Returns [`WorldError::DescriptorLayoutInvalid`](../error/enum.WorldError.md#rustdoc-item-281) when the capacity or the
allocation layout it implies cannot be represented.

#### Panics

Panics when the tick vector cannot reserve `additional` more entries,
because the capacity it would need overflows what a `Vec` can hold.

<a id="rustdoc-item-575"></a>

### `row_ptr`

```rust
pub fn row_ptr(self: &Self, index: usize) -> Option<*const u8>;
```

Returns a read pointer to one row's bytes.

The byte-level counterpart of the typed accessors, for a caller that
has established a row's layout by other means - the renderer reads a
shared component this way, because the component it wants was validated
by name and layout rather than by `TypeId`.

Returns `None` when `index` is out of range.

<a id="rustdoc-item-576"></a>

### `raw_ptr`

```rust
pub fn raw_ptr(self: &Self) -> *const u8;
```

Returns a raw read pointer to the first row.

<a id="rustdoc-item-577"></a>

### `element_type_id`

```rust
pub fn element_type_id(self: &Self) -> Option<std::any::TypeId>;
```

Runtime identity of the element type, or `None` when no exact `TypeId`
names it (a shared or descriptor column).

<a id="rustdoc-item-578"></a>

### `has_shared_identity`

```rust
pub fn has_shared_identity(self: &Self) -> bool;
```

Whether the element type is identified by layout rather than `TypeId`.

<a id="rustdoc-item-579"></a>

### `as_ptr`

```rust
pub fn as_ptr<T: 'static>(self: &Self) -> *const T;
```

Returns a typed read pointer to the first row.

#### Panics

If `T` is not this column's element type.

<a id="rustdoc-item-580"></a>

### `iter`

```rust
pub fn iter<T: 'static>(self: &Self) -> impl Iterator<Item = _>;
```

Iterates the rows as `T`.

#### Panics

If `T` is not this column's element type.

<a id="rustdoc-item-582"></a>

### `reserve`

```rust
pub fn reserve<T: 'static>(self: &mut Self, additional: usize);
```

Reserves capacity for `additional` more rows of `T`.

#### Panics

If `T` is not this column's element type, or the capacity cannot
describe an allocation - the one caller reserves a capacity it chose.

<a id="rustdoc-item-583"></a>

### `relayout`

```rust
pub fn relayout(self: &mut Self, layout: ColumnLayout, plan: &FieldPlan) -> Result<usize, WorldError>;
```

Rewrites every row into a new layout, following `plan`.

The column keeps its row count and row order, so indices callers hold -
including every `EntityLocation` that names a row - stay valid. Its
change ticks also stay as they are: a reshaped component was not added
or changed. Any byte the plan does not cover is zeroed, so a field added
to a foreign-language component starts at a defined value.

Each row is transformed through a scratch copy, so a plan that moves
fields inside a row cannot read a byte it has already overwritten. The
buffer is rewritten in place when the element size and alignment are
unchanged, and reallocated at the same capacity otherwise.

#### Errors

Returns [`WorldError::DescriptorSizeZero`](../error/enum.WorldError.md#rustdoc-item-279),
[`WorldError::DescriptorAlignmentInvalid`](../error/enum.WorldError.md#rustdoc-item-280) or
[`WorldError::DescriptorLayoutInvalid`](../error/enum.WorldError.md#rustdoc-item-281) when the new layout cannot describe
storage, and [`WorldError::DescriptorRowInvalid`](../error/enum.WorldError.md#rustdoc-item-444) when a planned field reads
or writes past the edge of a row. Nothing is modified in either case.

<a id="rustdoc-item-584"></a>

### `relayout_validated`

```rust
pub(crate) fn relayout_validated(self: &mut Self, layout: ColumnLayout, plan: &FieldPlan, previous_size: usize) -> usize;
```

[`Self::relayout`](#rustdoc-item-583) for a caller that has already validated.

This cannot fail: the only failure modes are the layout and plan checks
above, and both depend only on data the caller can check once for every
column it is about to rewrite. That lets a world-level relayout refuse a
bad plan before it touches the first column, instead of migrating some
columns and leaving others unchanged.

<a id="rustdoc-item-586"></a>

### `swap_remove_forget`

```rust
pub(in archetype) fn swap_remove_forget(self: &mut Self, index: usize);
```

Removes the row at `index` without releasing what it owns.

[`Self::swap_remove_discard`](#rustdoc-item-585) minus the `drop_range` call, for the one
case where that call would be wrong: the caller has moved the row
elsewhere, so releasing it here would be a double free. Private because
[`Self::take_row_from`](#rustdoc-item-549) is the only correct way to reach it - it pairs
the removal with the push that took ownership.

#### Panics

Panics when `index` is out of bounds.

<a id="rustdoc-item-585"></a>

### `swap_remove_discard`

```rust
pub fn swap_remove_discard(self: &mut Self, index: usize);
```

Removes the row at `index` by swapping in the last row.

Keeps the column dense and runs in O(1), but does not preserve row
ordering.

#### Panics

Panics when `index` is out of bounds.

<a id="rustdoc-item-587"></a>

### `reserve_one_row`

```rust
pub(in archetype) fn reserve_one_row(self: &mut Self) -> Result<(), WorldError>;
```

Ensures capacity for at least one more row, growing the buffer when full.

#### Errors

Returns [`WorldError::DescriptorLayoutInvalid`](../error/enum.WorldError.md#rustdoc-item-281) when the doubled capacity
or the allocation layout it implies cannot be represented.

<a id="rustdoc-item-588"></a>

### `grow_to`

```rust
pub(in archetype) fn grow_to(self: &mut Self, new_capacity: usize) -> Result<(), WorldError>;
```

Reallocates the buffer to hold exactly `new_capacity` rows.

This is the single growth implementation. [`Self::reserve_one_row`](#rustdoc-item-587)
picks the doubling policy and [`Self::reserve_rows`](#rustdoc-item-556) picks an exact
target, but both allocate and copy through here, so the two can never
disagree about how a buffer is moved.

#### Errors

Returns [`WorldError::DescriptorLayoutInvalid`](../error/enum.WorldError.md#rustdoc-item-281) when the capacity or the
allocation layout it implies cannot be represented.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Send`
- `Sync`
- `Drop`
