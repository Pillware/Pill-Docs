<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5986"></a>

# Struct `pill_editor_core::panels::PanelEntityDetail`

```rust
pub struct PanelEntityDetail;
```

Source: `editor\pill_editor_core\src\panels.rs:150`

The selected entity's components, as a panel sees them.

## Fields

<a id="rustdoc-item-5984"></a>

### `entity`

```rust
entity: pill_engine::Entity
```

The entity the detail describes.

<a id="rustdoc-item-5985"></a>

### `components`

```rust
components: Vec<PanelComponentValues>
```

The entity's components, in layout order.

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
