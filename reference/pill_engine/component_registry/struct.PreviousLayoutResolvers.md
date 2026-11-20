<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-321"></a>

# Struct `pill_engine::component_registry::PreviousLayoutResolvers`

```rust
pub(in component_registry) struct PreviousLayoutResolvers;
```

Visibility: `{'restricted': {'parent': 322, 'path': '::component_registry'}}` · Source: `engine\pill_engine\src\component_registry.rs:438`

The layout resolvers a world held before this artifact installed its own.

## Fields

<a id="rustdoc-item-324"></a>

### `value_types`

```rust
value_types: Option<ValueTypeLayoutResolver>
```

The value-type resolver installed before.

<a id="rustdoc-item-325"></a>

### `enums`

```rust
enums: Option<EnumLayoutResolver>
```

The enum resolver installed before.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Copy`
