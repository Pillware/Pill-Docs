<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3532"></a>

# Struct `pill_engine_core::ecs::query::filter::Or`

```rust
pub struct Or<F>;
```

Source: `engine\pill_engine_core\src\ecs\query\filter.rs:431`

A logical OR over a tuple of filters: a row matches when at least one
inner filter matches it.

`Or` applies that OR at both levels. An archetype is kept when it matches
the pairs of any branch (see [`archetype_filter_pairs`]), and a row is
yielded when any branch accepts it (see [`matches`]).

[`archetype_filter_pairs`]: trait.QueryFilter.md#rustdoc-item-3535
[`matches`]: trait.QueryFilter.md#rustdoc-item-3529

## Fields

<a id="rustdoc-item-3746"></a>

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `QueryFilter`
