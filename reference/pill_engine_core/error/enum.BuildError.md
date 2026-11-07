<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4767"></a>

# Enum `pill_engine_core::error::BuildError`

```rust
pub enum BuildError { ... }
```

Source: `engine\pill_engine_core\src\error.rs:797`

Error type for `EntityBuilder::build`.

Returned when the builder writes a component type the world has never seen,
when the same component type is handed to it twice, or when the requested
entity id already belongs to a live entity. An unregistered type must be
registered with `world.register_component::<T>()` first.

## Variants

<a id="rustdoc-item-4762"></a>

### `ComponentNotRegistered`

```rust
ComponentNotRegistered
```

One or more component types were not registered with the world.
Call `world.register_component::<T>()` for each type first.

<a id="rustdoc-item-4764"></a>

### `DuplicateEntityId`

```rust
DuplicateEntityId
```

The stable id handed to `EntityBuilder::with_id` already belongs to a
live entity.

Two entities under one id would make a saved reference ambiguous, so
the second build is refused rather than merged into the first.

<a id="rustdoc-item-4766"></a>

### `DuplicateComponent`

```rust
DuplicateComponent
```

One component type was handed to `EntityBuilder::with` more than once.

The component set defines the archetype's columns, so a second value of
the same type would grow one column by two rows for one entity row and
leave every later entity reading the wrong one.

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
