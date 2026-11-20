<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8877"></a>

# Struct `pill_engine_core::services::gizmos::GizmoDeclaration`

```rust
pub struct GizmoDeclaration;
```

Source: `engine\pill_engine_core\src\services\gizmos.rs:509`

What one component type declares about its gizmo.

The derive macro emits one of these into the component descriptor, so it
lives in a `static` and every field is a constant.

## Fields

<a id="rustdoc-item-8873"></a>

### `type_name`

```rust
type_name: &'static str
```

Fully-qualified component type name: the declaring module's path plus
the type's name.

<a id="rustdoc-item-8874"></a>

### `owner`

```rust
owner: &'static str
```

The package that declared the component, from `env!("CARGO_PKG_NAME")`
at the declaration site.

Publishing replaces an owner's entries, so this is what keeps a reload
from stacking a second copy of the same gizmo.

<a id="rustdoc-item-8875"></a>

### `when`

```rust
when: GizmoWhen
```

Which entities it draws for.

<a id="rustdoc-item-8876"></a>

### `draw`

```rust
draw: GizmoDrawEntry
```

The generated wrapper that walks the component's entities.

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
- `Copy`
- `Debug`
