<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3163"></a>

# Struct `pill_engine_core::component_field::row::FieldWrite`

```rust
pub(in component_field) struct FieldWrite;
```

Visibility: `{'restricted': {'parent': 3105, 'path': '::component_field'}}` · Source: `engine\pill_engine_core\src\component_field\row.rs:79`

A validated byte payload and where in the component row it belongs.

## Fields

<a id="rustdoc-item-3230"></a>

### `row_offset`

```rust
row_offset: usize
```

Byte offset of the payload within the component row.

<a id="rustdoc-item-3231"></a>

### `bytes`

```rust
bytes: Vec<u8>
```

The payload bytes (a scalar, one array element, or a whole array).

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
