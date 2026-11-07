<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2753"></a>

# Enum `pill_editor_core::editor_state::AssetReferenceLabel`

```rust
pub enum AssetReferenceLabel { ... }
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:167`

What an asset reference field currently names, as the Inspector shows it.

## Variants

<a id="rustdoc-item-2866"></a>

### `Unset`

```rust
Unset
```

The field is cleared and holds the invalid handle.

<a id="rustdoc-item-2868"></a>

### `Named`

```rust
Named
```

The field addresses a live asset, named by its path (or the name its
creator gave it).

<a id="rustdoc-item-2869"></a>

### `Unnamed`

```rust
Unnamed
```

The field addresses a live asset that has no name.

<a id="rustdoc-item-2870"></a>

### `Missing`

```rust
Missing
```

The field addresses nothing live, because the asset was removed or the
handle is stale.

## Associated functions and methods

<a id="rustdoc-item-2871"></a>

### `of`

```rust
pub fn of(world: &pill_engine::World, value: &FieldValue) -> Option<Self>;
```

Returns the label of an asset value, read through the world's import
registry.

<a id="rustdoc-item-2872"></a>

### `text`

```rust
pub fn text(self: &Self) -> &str;
```

Returns the text the Inspector draws for this asset label.

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
