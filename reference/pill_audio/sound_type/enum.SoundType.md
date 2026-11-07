<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-252"></a>

# Enum `pill_audio::sound_type::SoundType`

```rust
pub enum SoundType { ... }
```

Source: `extensions\pill_audio\pill_audio\src\sound_type.rs:25`

How a sound is positioned relative to the listener.

## Variants

<a id="rustdoc-item-658"></a>

### `Ambient`

```rust
Ambient
```

Not positioned in space: the sound plays at the volume its source sets,
wherever the entity is. Use this for music and UI sounds.

<a id="rustdoc-item-659"></a>

### `Spatial`

```rust
Spatial
```

Positioned in space: panned left or right, and made quieter as the
distance between the entity and the listener's ears grows.

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
- `FromSample<S>`
- `ToSample<U>`
- `Duplex<S>`
- `IntoSample<T>`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Default`
- `Serialize`
- `Deserialize<'de>`
