<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2755"></a>

# Enum `pill_editor_core::editor_state::EntityReferenceLabel`

```rust
pub enum EntityReferenceLabel { ... }
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:222`

What an entity reference field currently names, as the Inspector shows it.

## Variants

<a id="rustdoc-item-2911"></a>

### `Unset`

```rust
Unset
```

The field is cleared and holds the null handle.

<a id="rustdoc-item-2913"></a>

### `Live`

```rust
Live
```

The field addresses a live entity, shown by its Hierarchy label.

<a id="rustdoc-item-2914"></a>

### `Missing`

```rust
Missing
```

The field addresses nothing live. The entity was destroyed, or the
handle names a slot whose occupant has since been replaced.

## Associated functions and methods

<a id="rustdoc-item-2915"></a>

### `of`

```rust
pub fn of(world: &pill_engine::World, value: &FieldValue) -> Option<Self>;
```

Returns the label of an entity value, checked against the world.

<a id="rustdoc-item-2916"></a>

### `text`

```rust
pub fn text(self: &Self) -> &str;
```

The text the Inspector draws for this label.

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
