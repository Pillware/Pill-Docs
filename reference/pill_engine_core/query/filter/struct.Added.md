<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6509"></a>

# Struct `pill_engine_core::query::filter::Added`

```rust
pub struct Added<T: Component>;
```

Source: `engine\pill_engine_core\src\query\filter.rs:332`

Row filter that yields only the entities whose `T` was added since the
system that owns this query last ran.

## Fields

<a id="rustdoc-item-6692"></a>

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
