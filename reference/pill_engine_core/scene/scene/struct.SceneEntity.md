<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7788"></a>

# Struct `pill_engine_core::scene::scene::SceneEntity`

```rust
pub struct SceneEntity;
```

Source: `engine\pill_engine_core\src\scene\scene.rs:69`

One entity in a scene document.

## Fields

<a id="rustdoc-item-7786"></a>

### `id`

```rust
id: crate::entity::EntityId
```

The entity's stable id. A reference to it in the same document names
this id.

<a id="rustdoc-item-7787"></a>

### `components`

```rust
components: std::collections::BTreeMap<String, std::collections::BTreeMap<String, serde_json::Value>>
```

Its components by registered type name, each a map of field name to the
value the field layer reads.

A name written before type names dropped their module path is read in
its current form (`crate::type_names::crate_qualified_name`), so an
older scene still finds its components.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `DeserializeOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Serialize`
- `Deserialize<'de>`
