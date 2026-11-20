<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-616"></a>

# Struct `pill_audio::sound::ArcBytes`

```rust
pub struct ArcBytes;
```

Source: `extensions\pill_audio\modules\runtime\src\sound.rs:260`

A byte buffer shared through an `Arc`, which a decoder can read as a slice.

This is what lets a decoder read the sound's existing bytes instead of
copying them. Creating one clones the `Arc` (a reference-count bump, the
same cost for a large file and a small one), and the cursor then reads
through the shared buffer.

## Fields

<a id="rustdoc-item-757"></a>

### `0`

```rust
0: std::sync::Arc<[u8]>
```

_No documentation provided._

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
- `AsRef<[u8]>`
