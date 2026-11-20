<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4414"></a>

# Struct `pill_editor_core::gizmo::ElementHandleTarget`

```rust
pub struct ElementHandleTarget;
```

Source: `editor\pill_editor_core\src\gizmo.rs:537`

What one element handle of a frame points at.

## Fields

<a id="rustdoc-item-4411"></a>

### `entity`

```rust
entity: pill_engine::Entity
```

The entity the element belongs to.

<a id="rustdoc-item-4412"></a>

### `element`

```rust
element: u64
```

The tool's own id for the element.

<a id="rustdoc-item-4413"></a>

### `kind`

```rust
kind: String
```

The kind's name, as the tool reported it.

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
- `SerializableAny`
- `Equivalent<K>`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
