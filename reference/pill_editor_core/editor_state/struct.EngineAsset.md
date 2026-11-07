<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3212"></a>

# Struct `pill_editor_core::editor_state::EngineAsset`

```rust
pub struct EngineAsset;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:430`

An asset the store holds that has no file of the project's behind it.
Examples are a chain's built-in passes, the renderer's default material, and
a pass a module builds in code.

A picker offers these beside the listing's rows and badges them as the
engine's. No directory walk can find them, and a document that references
one names its guid.

## Fields

<a id="rustdoc-item-3209"></a>

### `kind`

```rust
kind: String
```

The registered type name a picker matches on, as a listing row's
[`AssetListing::kind`](struct.AssetListing.md#rustdoc-item-3168).

<a id="rustdoc-item-3210"></a>

### `name`

```rust
name: String
```

The name the store holds it under (`pill.pbr.opaque`).

<a id="rustdoc-item-3211"></a>

### `guid`

```rust
guid: Option<String>
```

Its guid: what a picker writes, because no path names it.

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
