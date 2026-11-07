<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4718"></a>

# Enum `pill_engine_core::error::RemoveComponentError`

```rust
pub enum RemoveComponentError { ... }
```

Source: `engine\pill_engine_core\src\error.rs:779`

Error type for `remove_component` operations.

Returned by the typed component removal paths when the target entity
is missing or does not carry the component being removed.

## Variants

<a id="rustdoc-item-4716"></a>

### `EntityNotFound`

```rust
EntityNotFound
```

The entity does not exist (was destroyed or never created).

<a id="rustdoc-item-4717"></a>

### `ComponentNotFound`

```rust
ComponentNotFound
```

The entity does not have a component of this type.

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
- `ToString`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Diagnostic`
- `Error`
- `Display`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `EngineMessage`
