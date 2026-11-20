<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5381"></a>

# Struct `pill_editor_core::hooks::events::ComponentEdit`

```rust
pub struct ComponentEdit<'a>;
```

Source: `editor\pill_editor_core\src\hooks\events.rs:238`

One component added to or removed from an entity.

## Fields

<a id="rustdoc-item-5378"></a>

### `entity`

```rust
entity: pill_engine::Entity
```

The entity the component belongs to.

<a id="rustdoc-item-5379"></a>

### `component`

```rust
component: &'a str
```

The component's registered type name.

<a id="rustdoc-item-5380"></a>

### `added`

```rust
added: bool
```

`true` when it was added, `false` when it was removed.

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
