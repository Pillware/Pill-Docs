<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6797"></a>

# Struct `pill_engine_core::query::iter::QueryIterMut`

```rust
pub struct QueryIterMut<'w, Q: QueryTarget, F: QueryFilter = ()>;
```

Source: `engine\pill_engine_core\src\query\iter.rs:83`

Sequential iterator for mutable queries.

It walks the query's cached list of matching archetypes in order and visits
every row the filter accepts. For each archetype it keeps the component
pointers and the filter state, so the hot loop below runs no further lookups.

## Fields

<a id="rustdoc-item-6786"></a>

### `world_ptr`

```rust
world_ptr: *mut crate::world::World
```

_No documentation provided._

<a id="rustdoc-item-6788"></a>

### `matching_archetypes`

```rust
matching_archetypes: Vec<crate::archetype::ArchetypeId>
```

_No documentation provided._

<a id="rustdoc-item-6789"></a>

### `current_archetype_index`

```rust
current_archetype_index: usize
```

_No documentation provided._

<a id="rustdoc-item-6790"></a>

### `current_entity_index`

```rust
current_entity_index: usize
```

_No documentation provided._

<a id="rustdoc-item-6791"></a>

### `current_archetype_len`

```rust
current_archetype_len: usize
```

_No documentation provided._

<a id="rustdoc-item-6792"></a>

### `current_state`

```rust
current_state: Option<<Q as >::State>
```

_No documentation provided._

<a id="rustdoc-item-6793"></a>

### `current_filter_state`

```rust
current_filter_state: Option<<F as >::State>
```

_No documentation provided._

<a id="rustdoc-item-6794"></a>

### `this_run`

```rust
this_run: crate::component::Tick
```

World tick captured at iterator construction; passed into each
`Mut<T>` produced during iteration so mutations can be detected.

<a id="rustdoc-item-6795"></a>

### `last_run`

```rust
last_run: crate::component::Tick
```

Baseline tick used by the filter to detect changes since the
owning system last ran.

<a id="rustdoc-item-6796"></a>

### `_phantom`

```rust
_phantom: std::marker::PhantomData<&'w mut (Q, F)>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-6798"></a>

### `new`

```rust
pub(crate) fn new(world_ptr: *mut World, matching_archetypes: Vec<ArchetypeId>, this_run: Tick, last_run: Tick) -> Self;
```

Constructs a new sequential iterator for [`Query::iter_mut`].

#### Safety

`world_ptr` must come from a `&mut World` that stays valid and
exclusively borrowed for the whole lifetime `'w`, because the iterator
reads and hands out its component storage through that pointer.

<a id="rustdoc-item-6800"></a>

### `advance_archetype`

```rust
pub(in query::iter) fn advance_archetype(self: &mut Self) -> Option<()>;
```

Moves to the next matching archetype and caches its component pointers
and filter state.

Returns `None` once the list is used up, and also when the world does not
hold the next id. The call is kept out of line (`#[inline(never)]`) so
the hot loop in [`Iterator::next`] stays small and predicts its branches
well.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `IntoIterator`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Iterator`
