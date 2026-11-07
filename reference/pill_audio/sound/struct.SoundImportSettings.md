<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-534"></a>

# Struct `pill_audio::sound::SoundImportSettings`

```rust
pub struct SoundImportSettings;
```

Source: `extensions\pill_audio\pill_audio\src\sound.rs:214`

How a sound file is read, as stored in its `.meta` file.

It has no fields, because a sound's bytes say everything about the sound.
The type exists so sound files get metadata files, and with them a guid
that survives a rename of the file. A field added later must have a
default, so files written before it existed still read.

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Serialize`
- `Deserialize<'de>`
