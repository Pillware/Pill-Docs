<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5499"></a>

# Struct `pill_editor_core::hooks::events::AssetEdit`

```rust
pub struct AssetEdit<'a>;
```

Source: `editor\pill_editor_core\src\hooks\events.rs:289`

One asset-file edit.

## Fields

<a id="rustdoc-item-5497"></a>

### `kind`

```rust
kind: AssetEditKind
```

What the edit did.

<a id="rustdoc-item-5498"></a>

### `path`

```rust
path: &'a str
```

The asset key involved: the file's path, or the import's destination.

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
- `Copy`
- `Debug`
