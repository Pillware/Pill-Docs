<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6528"></a>

# Struct `pill_engine_core::query::filter::TickFilterState`

```rust
pub struct TickFilterState;
```

Source: `engine\pill_engine_core\src\query\filter.rs:208`

Per-archetype state that `Changed<T>` and `Added<T>` use to test one row
at a time: a thread-safe pointer to the filtered component's ticks plus
the two ticks that bound the search.

The component can be missing from the archetype when one of those filters
sits inside an [`Or`](struct.Or.md#rustdoc-item-6503) whose other branch matched. The state then holds no
pointer, and every row is rejected.

## Fields

<a id="rustdoc-item-6636"></a>

### `ticks_pointer`

```rust
ticks_pointer: Option<super::ptr::SendPtr<crate::component::ComponentTicks>>
```

Raw pointer to the first tick of the filtered component's column;
`None` when the component is absent from the archetype.

<a id="rustdoc-item-6637"></a>

### `tick_count`

```rust
tick_count: usize
```

How many ticks that pointer addresses, for the debug bounds check.

<a id="rustdoc-item-6638"></a>

### `last_run`

```rust
last_run: crate::component::Tick
```

Tick of the owning system's previous run.

<a id="rustdoc-item-6639"></a>

### `this_run`

```rust
this_run: crate::component::Tick
```

Tick of the owning system's current run.

## Associated functions and methods

<a id="rustdoc-item-6640"></a>

### `new`

```rust
pub(in query::filter) fn new(column_ticks: &[ComponentTicks], last_run: Tick, this_run: Tick) -> Self;
```

Builds state pointing at the ticks of a column that is present in the
archetype being iterated.

<a id="rustdoc-item-6641"></a>

### `missing`

```rust
pub(in query::filter) fn missing() -> Self;
```

State for an archetype that does not hold the component; every row is
then rejected.

<a id="rustdoc-item-6642"></a>

### `is_present`

```rust
pub(in query::filter) fn is_present(self: &Self) -> bool;
```

Returns `true` when the archetype this state was built for holds the
component.

<a id="rustdoc-item-6643"></a>

### `ticks_at`

```rust
pub(in query::filter) unsafe fn ticks_at(self: &Self, index: usize) -> &ComponentTicks;
```

#### Safety

The caller must have seen [`is_present`](#rustdoc-item-6642) return
`true`.

#### Panics

Panics in debug builds when the component is missing, or when `index`
is past the last tick of the column.

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
