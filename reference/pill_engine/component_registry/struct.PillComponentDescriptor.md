<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10"></a>

# Struct `pill_engine::component_registry::PillComponentDescriptor`

```rust
pub struct PillComponentDescriptor;
```

Source: `engine\pill_engine\src\component_registry.rs:51`

One component type declared with `#[derive(PillComponent)]`.

The derive macro submits one into this artifact's registry. Every field can
be written in a `const`, so the descriptor can live in a `static`.

## Fields

<a id="rustdoc-item-0"></a>

### `type_name`

```rust
type_name: &'static str
```

The type's stored name, `<crate>::<Type>`: the crate the type is
compiled in and the type's own name, with no module path between them.

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

<a id="rustdoc-item-7"></a>

### `gizmo`

```rust
gizmo: Option<pill_engine_core::gizmos::GizmoDeclaration>
```

The gizmo the type declared with `#[pill(gizmo = ...)]`, if any.

Registration publishes every declaration into the world's
[`GizmoRegistry`], so the engine's gizmo pass never reads an artifact's
inventory itself.

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
- `Collect`
