<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6"></a>

# Struct `pill_engine::component_registry::PillComponentDescriptor`

```rust
pub struct PillComponentDescriptor;
```

Source: `engine\pill_engine\src\component_registry.rs:50`

One component type declared with `#[derive(PillComponent)]`.

The derive macro submits one into this artifact's registry. Every field can
be written in a `const`, so the descriptor can live in a `static`.

## Fields

<a id="rustdoc-item-0"></a>

### `type_name`

```rust
type_name: &'static str
```

Fully-qualified type path: the declaring module's path plus the type's
name.

<a id="rustdoc-item-1"></a>

### `persistable`

```rust
persistable: bool
```

Whether the component is persistable (schema-migrated across reloads).

<a id="rustdoc-item-2"></a>

### `fields`

```rust
fields: &'static [ComponentFieldDescriptor]
```

Compile-time field layout of the component; empty for components with
no named fields (unit structs, tuple structs).

<a id="rustdoc-item-4"></a>

### `register`

```rust
register: fn (_: &mut crate::World)
```

Registers the component into a world.

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
- `Collect`
