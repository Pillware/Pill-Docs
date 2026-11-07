<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-247"></a>

# Struct `pill_audio::audio_manager::AudioSettingsAsset`

```rust
pub struct AudioSettingsAsset;
```

Source: `extensions\pill_audio\pill_audio\src\audio_manager.rs:156`

The standalone asset a project tunes the audio device through.

Its document is [`AudioSettings`](struct.AudioSettings.md#rustdoc-item-249), so the file at
`res/settings/pill_audio.audio_settings` names the same three fields the
manager applies. The loaded value is only a carrier: the manager reads the
document, not the asset.

The derive declares the type, so every generation of the module registers it
with the world's asset store without a call in `register`.

## Fields

<a id="rustdoc-item-344"></a>

### `settings`

```rust
settings: AudioSettings
```

The settings the file holds.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
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
- `Default`
- `TraitAccessible<dyn Asset>`
- `Asset`
- `StandaloneAsset`
