<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3535"></a>

# Struct `pill_engine_core::config::EntityBuilderConfig`

```rust
pub struct EntityBuilderConfig;
```

Source: `engine\pill_engine_core\src\config.rs:118`

Zero-sized struct grouping the entity-builder constants.

## Associated functions and methods

<a id="rustdoc-item-3536"></a>

### `DEFAULT_COMPONENTS_CAPACITY`

```rust
const DEFAULT_COMPONENTS_CAPACITY: usize = 8;
```

Starting capacity of the component list in `EntityBuilder` and
`DeferredEntityBuilder`.

Most entities carry 3 to 8 components, so pre-allocating 8 avoids a
reallocation while components are added one by one with `.with()`.

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
