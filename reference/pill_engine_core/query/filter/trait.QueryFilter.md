<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6508"></a>

# Trait `pill_engine_core::query::filter::QueryFilter`

```rust
pub trait QueryFilter { ... }
```

Source: `engine\pill_engine_core\src\query\filter.rs:54`

Trait for predicates that decide which entities a query yields beyond
the component-set match the [`QueryTarget`] already implies.

A filter answers at two levels:

1. Archetype level: [`archetype_filter_pairs`] returns `(include, exclude)`
   component-id pairs, and an archetype passes when it satisfies any one
   pair (a filter that returns no pair at all restricts nothing). The
   default builds one pair from [`included_component_ids`] and
   [`excluded_component_ids`]; [`Or`](struct.Or.md#rustdoc-item-6503) overrides it to return the pairs of
   every inner filter.
2. Row level: [`init_state`] builds one state per archetype (for the tick
   filters, a pointer to the column's ticks) and [`matches`] runs for every
   candidate row. This is how [`Changed`](struct.Changed.md#rustdoc-item-6450) and [`Added`](struct.Added.md#rustdoc-item-6509) work.

The trivial filter `()` matches every row.

[`QueryTarget`]: ../target/trait.QueryTarget.md#rustdoc-item-2754
[`archetype_filter_pairs`]: #rustdoc-item-6506
[`included_component_ids`]: #rustdoc-item-6504
[`excluded_component_ids`]: #rustdoc-item-6505
[`init_state`]: #rustdoc-item-6507
[`matches`]: #rustdoc-item-6500

## Required and provided items

<a id="rustdoc-item-6501"></a>

### `State`

```rust
type State: Send + Sync;
```

Per-archetype cached state used by [`Self::matches`](#rustdoc-item-6500).

<a id="rustdoc-item-6502"></a>

### `ACCEPTS_ALL`

```rust
const ACCEPTS_ALL: bool = false;
```

True when this filter accepts every row unconditionally (e.g. `()`).
Queries read it to skip filter evaluation in the inner loop and to
take their fast paths in `first`, `is_empty` and `entity_count`. It
stays `false` by default because most filters do real work.

<a id="rustdoc-item-6504"></a>

### `included_component_ids`

```rust
fn included_component_ids() -> Vec<ComponentId>;
```

Components whose storage this filter inspects.

Two consumers read this list. The default `archetype_filter_pairs`
turns it into the must-contain half of one pair, and a query's access
report declares every listed component as read, so the scheduler never
runs a writer of that component beside this system ([`Or`](struct.Or.md#rustdoc-item-6503) overrides
this method to return the union of its branches). The query's
archetype mask is built from `archetype_filter_pairs`, not from this
method.

<a id="rustdoc-item-6505"></a>

### `excluded_component_ids`

```rust
fn excluded_component_ids() -> Vec<ComponentId>;
```

Components that a matching archetype must not contain. An archetype
that holds any of them is excluded.

<a id="rustdoc-item-6506"></a>

### `archetype_filter_pairs`

```rust
fn archetype_filter_pairs() -> Vec<(Vec<ComponentId>, Vec<ComponentId>)>;
```

Returns `(include_ids, exclude_ids)` pairs that scope which archetypes
this filter accepts.

One pair means: the archetype must contain all of `include_ids` and
none of `exclude_ids`. An archetype passes the filter when it passes
any one of the pairs, so the pairs combine with OR.

The default implementation returns one pair built from
[`included_component_ids`] and [`excluded_component_ids`]. It returns
no pair at all when both lists are empty, which the query reads as "no
archetype restriction". [`Or`] overrides this method to return the
pairs of every inner filter, so a branch that accepts every archetype
makes the whole `Or` accept every archetype.

[`included_component_ids`]: #rustdoc-item-6504
[`excluded_component_ids`]: #rustdoc-item-6505
[`Or`]: struct.Or.md#rustdoc-item-6503

<a id="rustdoc-item-6507"></a>

### `init_state`

```rust
fn init_state(archetype: &Archetype, last_run: Tick, this_run: Tick) -> <Self as >::State;
```

Builds the state this filter needs to test the rows of one archetype.

The archetype arrives as a shared reference because that is all a
filter needs: it only reads a column's ticks. The shared borrow also
lets a tuple or [`Or`](struct.Or.md#rustdoc-item-6503) build the state of every member in one
expression.

`last_run` and `this_run` bound the ticks a row must fall between to
count as changed or added.

<a id="rustdoc-item-6500"></a>

### `matches`

```rust
fn matches(state: &<Self as >::State, index: usize) -> bool;
```

Returns `true` when the row at `index` passes this filter.

`state` is the state [`init_state`] built for the archetype the row
belongs to.
