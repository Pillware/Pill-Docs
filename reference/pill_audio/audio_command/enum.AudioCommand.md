<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4"></a>

# Enum `pill_audio::audio_command::AudioCommand`

```rust
pub enum AudioCommand { ... }
```

Source: `extensions\pill_audio\pill_audio\src\audio_command.rs:34`

An action an [`AudioSourceComponent`] has been asked to perform, carried
out on the next frame.

The component stores one command, not a queue. Each command sets a
complete state on its own, so only the last one set in a frame is carried
out. A caller that plays and then stops before the next frame gets the
stop.

## Variants

<a id="rustdoc-item-0"></a>

### `None`

```rust
None
```

No action is pending.

<a id="rustdoc-item-1"></a>

### `Play`

```rust
Play
```

Starts playback from the beginning. A source that is already playing
is restarted.

<a id="rustdoc-item-2"></a>

### `Pause`

```rust
Pause
```

Pauses playback and keeps the current position.

<a id="rustdoc-item-3"></a>

### `Stop`

```rust
Stop
```

Stops playback and returns the sink to the pool, so another source
can use it.

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
