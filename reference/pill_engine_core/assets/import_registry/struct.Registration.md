<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-723"></a>

# Struct `pill_engine_core::assets::import_registry::Registration`

```rust
pub(in assets::import_registry) struct Registration;
```

Visibility: `{'restricted': {'parent': 425, 'path': '::assets::import_registry'}}` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:535`

One binary's registration of a type.

## Fields

<a id="rustdoc-item-719"></a>

### `alive`

```rust
alive: std::sync::Weak<()>
```

A weak reference that stays valid while the registering generation's
marker resource lives.

<a id="rustdoc-item-721"></a>

### `extensions`

```rust
extensions: Vec<String>
```

The extensions that binary's copy of the type declared.

<a id="rustdoc-item-722"></a>

### `functions`

```rust
functions: ImportFunctions
```

Entry points into that binary.

## Associated functions and methods

<a id="rustdoc-item-724"></a>

### `is_alive`

```rust
pub(in assets::import_registry) fn is_alive(self: &Self) -> bool;
```

_No documentation provided._

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
