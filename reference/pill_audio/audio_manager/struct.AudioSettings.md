<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-249"></a>

# Struct `pill_audio::audio_manager::AudioSettings`

```rust
pub struct AudioSettings;
```

Source: `extensions\pill_audio\pill_audio\src\audio_manager.rs:121`

The audio device's tunable settings, as the project's settings asset
describes them.

Pool sizes are fixed when the device opens: a pool grows by allocating a
mixer channel per sink, and a source's `sink` index would point into a pool
that changed under it. A document that asks for different sizes is refused
with that reason, and the host is restarted to change them. Ear separation
can move while the device runs, so it is applied live.

This is the document of [`AudioSettingsAsset`](struct.AudioSettingsAsset.md#rustdoc-item-247): the settings file is a real
asset (`res/settings/pill_audio.audio_settings`), so an edit is checked
against this type before it reaches the device, and the Inspector can draw
its fields.

## Fields

<a id="rustdoc-item-297"></a>

### `ambient_sinks`

```rust
ambient_sinks: usize
```

Voices for non-positional playback.

<a id="rustdoc-item-298"></a>

### `spatial_sinks`

```rust
spatial_sinks: usize
```

Voices for positional playback.

<a id="rustdoc-item-299"></a>

### `ear_separation`

```rust
ear_separation: f32
```

Half the distance between the listener's ears, in world units.

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
- `Serialize`
- `Deserialize<'de>`
- `Default`
