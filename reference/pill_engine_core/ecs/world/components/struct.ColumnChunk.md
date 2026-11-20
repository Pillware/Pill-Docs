<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4733"></a>

# Struct `pill_engine_core::ecs::world::components::ColumnChunk`

```rust
pub struct ColumnChunk<'a>;
```

Source: `engine\pill_engine_core\src\ecs\world\components.rs:39`

One archetype's raw rows of one component, as a language binding reads them.

The four chunk accessors for language bindings return this type. Every field
is named, so a binding reads `len` as a row count and `element_size` as the
row stride instead of remembering their order in a tuple.

## Fields

<a id="rustdoc-item-4728"></a>

### `archetype`

```rust
archetype: crate::archetype::ArchetypeId
```

The id of the archetype the rows belong to.

<a id="rustdoc-item-4729"></a>

### `data`

```rust
data: *mut u8
```

The column's contiguous row buffer, one `element_size` block per row.

<a id="rustdoc-item-4730"></a>

### `len`

```rust
len: usize
```

Number of rows in the column.

<a id="rustdoc-item-4731"></a>

### `element_size`

```rust
element_size: usize
```

Bytes per row, read from the live column.

<a id="rustdoc-item-4732"></a>

### `ticks`

```rust
ticks: &'a mut [crate::component::ComponentTicks]
```

The column's change ticks, one per row.

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
