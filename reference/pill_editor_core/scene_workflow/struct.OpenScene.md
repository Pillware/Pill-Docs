<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6617"></a>

# Struct `pill_editor_core::scene_workflow::OpenScene`

```rust
pub struct OpenScene;
```

Source: `editor\pill_editor_core\src\scene_workflow.rs:42`

Which `.scene` file the editor's world came from: its path and its guid.

## Fields

<a id="rustdoc-item-6615"></a>

### `path`

```rust
path: String
```

The scene's path below the asset directory, `/`-separated.

<a id="rustdoc-item-6616"></a>

### `guid`

```rust
guid: pill_engine::AssetGuid
```

The guid written into the file; Save keeps it, so references to the
scene from other data stay valid.

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
