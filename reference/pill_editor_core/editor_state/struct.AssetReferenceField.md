<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3291"></a>

# Struct `pill_editor_core::editor_state::AssetReferenceField`

```rust
pub struct AssetReferenceField;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:494`

One reference field of an asset's settings, as the Inspector draws it.

## Fields

<a id="rustdoc-item-3372"></a>

### `key`

```rust
key: String
```

The settings key the edit writes: a field name such as `shader`,
`textures.<slot>`, or `passes[<index>]`.

<a id="rustdoc-item-3373"></a>

### `target`

```rust
target: String
```

The registered type name its picker offers, as a listing row's kind.

<a id="rustdoc-item-3374"></a>

### `guid`

```rust
guid: Option<String>
```

The guid the document holds now, when it holds one.

<a id="rustdoc-item-3375"></a>

### `nested`

```rust
nested: bool
```

Whether the document writes `{ "guid": … }` (a named reference) rather
than a bare guid string (a texture slot).

<a id="rustdoc-item-3376"></a>

### `label`

```rust
label: Option<String>
```

What the row reads for the asset the guid names: its path when the
listing holds it. Otherwise it is the name the store loaded the asset
under, because a chain's built-in passes have no file of their own. It
is `None` when neither knows the guid.

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
