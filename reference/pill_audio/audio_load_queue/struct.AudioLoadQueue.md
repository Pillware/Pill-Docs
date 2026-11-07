<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-192"></a>

# Struct `pill_audio::audio_load_queue::AudioLoadQueue`

```rust
pub struct AudioLoadQueue;
```

Source: `extensions\pill_audio\pill_audio\src\audio_load_queue.rs:33`

Queued sound loads, keyed by playback name, waiting for the audio system.

The shared name is what lets a project and this module reach one queue: an
id built from `TypeId` differs between the two images.

## Fields

<a id="rustdoc-item-188"></a>

### `sounds`

```rust
sounds: std::collections::BTreeMap<String, Vec<u8>>
```

The encoded bytes of each queued sound, by playback name.

## Associated functions and methods

<a id="rustdoc-item-193"></a>

### `load`

```rust
pub fn load(self: &mut Self, playback_name: &str, encoded_bytes: &[u8]);
```

Queues an encoded sound under its playback name.

Queuing the same name again replaces the bytes that were still waiting.

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
- `Default`
- `Resource`
