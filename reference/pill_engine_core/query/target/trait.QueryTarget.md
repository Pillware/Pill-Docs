<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2754"></a>

# Trait `pill_engine_core::query::target::QueryTarget`

```rust
pub trait QueryTarget { ... }
```

Source: `engine\pill_engine_core\src\query\target.rs:48`

Trait for fetching components from archetypes.

Implemented for:
- [`Entity`](../../entity/struct.Entity.md#rustdoc-item-669): Access to entity IDs
- `&T`: Immutable component reference
- `&mut T`: Mutable component reference (yielded as [`Mut<T>`](../change_detection/struct.Mut.md#rustdoc-item-6451))
- Tuples up to arity 5

A query keeps one [`State`](#rustdoc-item-7125) per archetype it matches.
[`init_state`] builds that state once for an archetype, usually by caching
a raw pointer into the archetype's storage.
[`fetch_with_state`](#rustdoc-item-7130) then reads one row out
of it.

[`init_state`]: #rustdoc-item-7129

## Required and provided items

<a id="rustdoc-item-7124"></a>

### `Item`

```rust
type Item<'a>;
```

The type yielded per row by this query target.

<a id="rustdoc-item-7125"></a>

### `State`

```rust
type State;
```

The state a query keeps for one matching archetype, usually a pointer
into that archetype's storage.

<a id="rustdoc-item-7127"></a>

### `component_ids`

```rust
fn component_ids() -> Vec<ComponentId>;
```

Returns the component ids this target reads, followed by the ids it
writes.

The default takes both lists from
[`report_component_access`](#rustdoc-item-7126)
rather than have each implementation spell the ids out a second time.
The mask a query builds and the access a system reports then come from
one description, so they cannot disagree.

#### Panics

Panics for a tuple target that reads and writes the same component,
because `report_component_access` refuses it there.

<a id="rustdoc-item-7126"></a>

### `report_component_access`

```rust
fn report_component_access() -> (Vec<ComponentId>, Vec<ComponentId>);
```

Reports which components this target reads and which it writes, for
system dependency analysis.

The first vector holds the ids read, the second the ids written.

#### Panics

A tuple target panics here when it reads and writes the same component,
or writes one twice, because iterating it would create overlapping
borrows of one row. The check runs in every build, not only in debug
builds.

<a id="rustdoc-item-7128"></a>

### `declared_shared_schemas`

```rust
fn declared_shared_schemas() -> Vec<(ComponentId, u64)>;
```

Reports the shared components this target reads or writes, each with
the schema hash (a hash of the field layout) that this binary's type
declares for it.

[`crate::Query::new`](../query/struct.Query.md#rustdoc-item-2752) compares each hash with the one the component
registry holds. A mismatch means this binary was built against a
different layout of the component than the one registered now. Reading
the current rows through its field offsets would then be undefined
behavior, so the query matches nothing instead.

Components that are not shared, and components whose type declares no
layout, are left out because there is no hash to compare. For those,
the component's identity or its size and alignment is the only check
there is. The default reports none.

<a id="rustdoc-item-7129"></a>

### `init_state`

```rust
fn init_state(archetype: &mut Archetype, this_run: Tick) -> <Self as >::State;
```

Builds the state this target keeps for one archetype, usually by
caching a pointer into the archetype's storage.

`this_run` is the tick of the current run. Mutable targets store it so
a write through [`Mut<T>`](../change_detection/struct.Mut.md#rustdoc-item-6451) can record when it happened. Read-only
targets ignore it.

<a id="rustdoc-item-7130"></a>

### `fetch_with_state`

```rust
fn fetch_with_state<'a>(state: &<Self as >::State, index: usize) -> <Self as >::Item<'a>;
```

Returns the row at `index`, read through the state [`init_state`] built.

The sequential and the parallel iterator both call this, so a target
keeps one fetch implementation for the two paths.

[`init_state`]: #rustdoc-item-7129
