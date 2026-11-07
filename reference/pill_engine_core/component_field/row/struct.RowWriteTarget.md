<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3206"></a>

# Struct `pill_engine_core::component_field::row::RowWriteTarget`

```rust
pub(in component_field) struct RowWriteTarget<'a>;
```

Visibility: `{'restricted': {'parent': 3105, 'path': '::component_field'}}` · Source: `engine\pill_engine_core\src\component_field\row.rs:61`

The row one field write targets, and the names its refusals report.

## Fields

<a id="rustdoc-item-3201"></a>

### `archetype_id`

```rust
archetype_id: crate::archetype::ArchetypeId
```

Archetype holding the row.

<a id="rustdoc-item-3202"></a>

### `row`

```rust
row: usize
```

Row within that archetype.

<a id="rustdoc-item-3203"></a>

### `component_id`

```rust
component_id: crate::component::ComponentId
```

Component whose column holds the field.

<a id="rustdoc-item-3204"></a>

### `component_name`

```rust
component_name: &'a str
```

Component name the error paths report.

<a id="rustdoc-item-3205"></a>

### `field_name`

```rust
field_name: &'a str
```

Field name the error paths report.

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
