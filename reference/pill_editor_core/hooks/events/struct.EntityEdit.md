<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5417"></a>

# Struct `pill_editor_core::hooks::events::EntityEdit`

```rust
pub struct EntityEdit;
```

Source: `editor\pill_editor_core\src\hooks\events.rs:249`

One entity created or destroyed.

## Fields

<a id="rustdoc-item-5415"></a>

### `entity`

```rust
entity: pill_engine::Entity
```

The entity, as the command applied it.

<a id="rustdoc-item-5416"></a>

### `created`

```rust
created: bool
```

`true` when it was created, `false` when it was destroyed.

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
