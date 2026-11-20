<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5545"></a>

# Struct `pill_engine_core::reflection::component_field::row::RowWriteTarget`

```rust
pub(in reflection::component_field) struct RowWriteTarget<'a>;
```

Visibility: `{'restricted': {'parent': 5515, 'path': '::reflection::component_field'}}` · Source: `engine\pill_engine_core\src\reflection\component_field\row.rs:61`

The row one field write targets, and the names its refusals report.

## Fields

<a id="rustdoc-item-7111"></a>

### `archetype_id`

```rust
archetype_id: crate::archetype::ArchetypeId
```

Archetype holding the row.

<a id="rustdoc-item-7112"></a>

### `row`

```rust
row: usize
```

Row within that archetype.

<a id="rustdoc-item-7113"></a>

### `component_id`

```rust
component_id: crate::component::ComponentId
```

Component whose column holds the field.

<a id="rustdoc-item-7114"></a>

### `component_name`

```rust
component_name: &'a str
```

Component name the error paths report.

<a id="rustdoc-item-7115"></a>

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
