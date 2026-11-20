<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5519"></a>

# Struct `pill_engine_core::reflection::component_field::row::ResolvedField`

```rust
pub(in reflection::component_field::row) struct ResolvedField;
```

Visibility: `{'restricted': {'parent': 5517, 'path': '::reflection::component_field::row'}}` · Source: `engine\pill_engine_core\src\reflection\component_field\row.rs:45`

The archetype, row, component id and field descriptor of one field.

Together these four values say where a field lives. Every single-field
entry point needs them before it can read or write and gets them from
[`World::resolve_field`](../../../ecs/world/struct.World.md#rustdoc-item-5518), so the rule and its error payloads live in one
place instead of in each entry point.

## Fields

<a id="rustdoc-item-7084"></a>

### `archetype_id`

```rust
archetype_id: crate::archetype::ArchetypeId
```

The archetype holding the entity.

<a id="rustdoc-item-7085"></a>

### `row`

```rust
row: usize
```

The entity's row within that archetype.

<a id="rustdoc-item-7086"></a>

### `component_id`

```rust
component_id: crate::component::ComponentId
```

The component carried by that entity.

<a id="rustdoc-item-7087"></a>

### `descriptor`

```rust
descriptor: crate::component_registry::ComponentFieldDescriptor
```

The requested field's descriptor.

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
