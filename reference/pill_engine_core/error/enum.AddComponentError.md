<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4673"></a>

# Enum `pill_engine_core::error::AddComponentError`

```rust
pub enum AddComponentError { ... }
```

Source: `engine\pill_engine_core\src\error.rs:751`

Error type for `add_component` operations.

Raised when the target entity is missing, already carries the component
being added, or when the component type was never registered with this
world.

## Variants

<a id="rustdoc-item-4669"></a>

### `EntityNotFound`

```rust
EntityNotFound
```

The entity does not exist (was destroyed or never created).

<a id="rustdoc-item-4670"></a>

### `ComponentAlreadyExists`

```rust
ComponentAlreadyExists
```

The entity already has a component of this type.

<a id="rustdoc-item-4672"></a>

### `ComponentNotRegistered`

```rust
ComponentNotRegistered
```

The component type was never registered with this world.

Registration is what gives a component its archetype bit, so an
unregistered type would resolve its destination archetype back to the
entity's current one - storing nothing while reporting success.

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
