<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7569"></a>

# Enum `pill_engine_core::saved_references::SavedReference`

```rust
pub enum SavedReference { ... }
```

Source: `engine\pill_engine_core\src\saved_references.rs:163`

The saved value of one reference field.

An asset reference is an object holding its guid, its path hint and its
sub-asset key. An entity reference is the entity's stable id, written as 32
hex digits. Reading cannot confuse the two, because only the asset form is
an object.

## Variants

<a id="rustdoc-item-7566"></a>

### `Asset`

```rust
Asset
```

A reference to an asset.

<a id="rustdoc-item-7568"></a>

### `Entity`

```rust
Entity
```

A reference to an entity, by its stable id.

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
- `DeserializeOwned`
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
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Serialize`
- `Deserialize<'de>`
