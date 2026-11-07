<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-480"></a>

# Enum `pill_audio::sound::SoundLoadError`

```rust
pub enum SoundLoadError { ... }
```

Source: `extensions\pill_audio\pill_audio\src\sound.rs:222`

Why [`Sound::load`](struct.Sound.md#rustdoc-item-468) could not produce a sound.

## Variants

<a id="rustdoc-item-477"></a>

### `InvalidPath`

```rust
InvalidPath
```

No mount holds the path, or its extension is not one of
[`SUPPORTED_AUDIO_FORMATS`](constant.SUPPORTED_AUDIO_FORMATS.md#rustdoc-item-469).

<a id="rustdoc-item-478"></a>

### `Unreadable`

```rust
Unreadable
```

The file was found but could not be read.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
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
- `Display`
- `Error`
