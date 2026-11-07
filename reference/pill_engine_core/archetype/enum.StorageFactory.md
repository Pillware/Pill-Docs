<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-85"></a>

# Enum `pill_engine_core::archetype::StorageFactory`

```rust
pub enum StorageFactory { ... }
```

Source: `engine\pill_engine_core\src\archetype.rs:78`

Strategy for creating component storage for a specific component type.

A factory is registered per [`ComponentId`](../component/enum.ComponentId.md#rustdoc-item-83) and used when an [`Archetype`](struct.Archetype.md#rustdoc-item-84)
is created, so the archetype can allocate storage without knowing the
concrete component types.

## Variants

<a id="rustdoc-item-79"></a>

### `Native`

```rust
Native
```

Creates a type-erased native storage column inside the archetype's
[`ComponentColumns`](struct.ComponentColumns.md#rustdoc-item-77).

It carries only data - the type id, the layout and the per-type
function table - never a closure. The column is a concrete
[`ComponentColumn`](struct.ComponentColumn.md#rustdoc-item-78) with no trait-object vtable, so the column stays
valid when a module unloads. The engine refreshes the function table on
every reload.

<a id="rustdoc-item-82"></a>

### `Descriptor`

```rust
Descriptor
```

Carries the runtime layout of a component owned by another language.

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
