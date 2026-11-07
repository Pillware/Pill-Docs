<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7690"></a>

# Struct `pill_engine_core::scene::SceneEntity`

```rust
pub struct SceneEntity;
```

Source: `engine\pill_engine_core\src\scene.rs:69`

One entity in a scene document.

## Fields

<a id="rustdoc-item-7688"></a>

### `id`

```rust
id: crate::entity::EntityId
```

The entity's stable id. A reference to it in the same document names
this id.

<a id="rustdoc-item-7689"></a>

### `components`

```rust
components: std::collections::BTreeMap<String, std::collections::BTreeMap<String, serde_json::Value>>
```

Its components by registered type name, each a map of field name to the
value the field layer reads.

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
- `Serialize`
- `Deserialize<'de>`
