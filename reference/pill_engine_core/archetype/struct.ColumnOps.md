<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-168"></a>

# Struct `pill_engine_core::archetype::ColumnOps`

```rust
pub struct ColumnOps;
```

Source: `engine\pill_engine_core\src\archetype.rs:233`

Per-type behaviour for one column, as plain data.

A column holds raw bytes plus a layout. Releasing a row is the only
operation that has to know what those bytes mean, and it runs through this
table.

[`ColumnOps::of`](#rustdoc-item-242) builds the table from `T`'s own code, so dropping a row
runs the element type's destructor. [`ColumnOps::blittable`](#rustdoc-item-243) needs no
per-type code: a validated descriptor component is plain data, so dropping
a row does nothing and moving one is a `memcpy`.

The table is data, never a trait object. A column outlives the DLL that
filled it, so it can be pointed at the new generation's table instead of
dangling into an unmapped image.

## Fields

<a id="rustdoc-item-240"></a>

### `drop_range`

```rust
drop_range: unsafe fn (_: *mut u8, _: usize)
```

Drops `row_count` initialized rows starting at `rows_ptr`, or does
nothing for plain data.

#### Safety

`rows_ptr` must address `row_count` live, correctly aligned rows of this
column's element type.

<a id="rustdoc-item-241"></a>

### `trivial_drop`

```rust
trivial_drop: bool
```

Whether [`Self::drop_range`](#rustdoc-item-240) does nothing.

Read instead of called on the hot paths: a plain-data column skips the
call entirely, rather than paying for an indirect jump to an empty
function.

## Associated functions and methods

<a id="rustdoc-item-242"></a>

### `of`

```rust
pub fn of<T: 'static>() -> Self;
```

The generated table for a concrete Rust element type.

<a id="rustdoc-item-243"></a>

### `blittable`

```rust
pub fn blittable(_witness: Blittability) -> Self;
```

The generic table for plain-data rows described only by a descriptor.

It requires the same [`Blittability`](struct.Blittability.md#rustdoc-item-111) value as the column, so a table
that says there is nothing to drop cannot be built without the check
that made that true.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Clone`
- `Copy`
- `Debug`
