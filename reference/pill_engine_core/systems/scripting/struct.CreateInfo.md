<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4796"></a>

# Struct `pill_engine_core::systems::scripting::CreateInfo`

```rust
pub struct CreateInfo;
```

Source: `engine\pill_engine_core\src\systems\scripting.rs:211`

Everything [`ScriptComponent::on_create`](trait.ScriptComponent.md#rustdoc-item-10562) is told about why it ran.

The editor, the scene loader and the play session all produce the same
`on_create` call; only [`CreateInfo::cause`](#rustdoc-item-10559) says which one did.

## Fields

<a id="rustdoc-item-10559"></a>

### `cause`

```rust
cause: CreateCause
```

What made the component start existing.

<a id="rustdoc-item-10560"></a>

### `mode`

```rust
mode: crate::engine::RunMode
```

The mode the engine was in: a script can be created while editing a
scene and while playing one.

<a id="rustdoc-item-10561"></a>

### `duplicated_from`

```rust
duplicated_from: Option<crate::entity::Entity>
```

For a copied component, the entity it was copied from, when the caller
knows which entity that was.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
