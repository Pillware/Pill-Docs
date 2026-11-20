<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3479"></a>

# Struct `pill_engine_core::ecs::query::filter::Changed`

```rust
pub struct Changed<T: Component>;
```

Source: `engine\pill_engine_core\src\ecs\query\filter.rs:289`

Row filter that yields only the entities whose `T` changed (or was added)
since the system that owns this query last ran.

It is built on [`ComponentTicks::is_changed`](../../component/struct.ComponentTicks.md#rustdoc-item-3075).

## Fields

<a id="rustdoc-item-3697"></a>

### `0`

```rust
0: std::marker::PhantomData<T>
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
