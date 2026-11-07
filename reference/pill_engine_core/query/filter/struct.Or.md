<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6503"></a>

# Struct `pill_engine_core::query::filter::Or`

```rust
pub struct Or<F>;
```

Source: `engine\pill_engine_core\src\query\filter.rs:431`

A logical OR over a tuple of filters: a row matches when at least one
inner filter matches it.

`Or` applies that OR at both levels. An archetype is kept when it matches
the pairs of any branch (see [`archetype_filter_pairs`]), and a row is
yielded when any branch accepts it (see [`matches`]).

[`archetype_filter_pairs`]: trait.QueryFilter.md#rustdoc-item-6506
[`matches`]: trait.QueryFilter.md#rustdoc-item-6500

## Fields

<a id="rustdoc-item-6717"></a>

### `0`

```rust
0: std::marker::PhantomData<F>
```

_No documentation provided._

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
- `QueryFilter`
