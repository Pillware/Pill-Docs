<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3561"></a>

# Struct `pill_engine_core::config::QueryConfig`

```rust
pub struct QueryConfig;
```

Source: `engine\pill_engine_core\src\config.rs:134`

Zero-sized struct grouping the query constants.

## Associated functions and methods

<a id="rustdoc-item-3562"></a>

### `DEFAULT_TUPLE_COMPONENT_IDS_CAPACITY`

```rust
const DEFAULT_TUPLE_COMPONENT_IDS_CAPACITY: usize = 4;
```

Starting capacity for the component-id and filter-pair lists that the
query-target and filter-tuple macros build.

A typical query names 1 to 4 components or filters, so 4 avoids a
reallocation in the common case.

<a id="rustdoc-item-3563"></a>

### `DEFAULT_FILTER_PAIRS_CAPACITY`

```rust
const DEFAULT_FILTER_PAIRS_CAPACITY: usize = 4;
```

Starting capacity for the filter-pair list built when an `Or` filter is
expanded.

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
