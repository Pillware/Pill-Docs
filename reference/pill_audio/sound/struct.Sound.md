<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-293"></a>

# Struct `pill_audio::sound::Sound`

```rust
pub struct Sound;
```

Source: `extensions\pill_audio\modules\runtime\src\sound.rs:81`

One loaded audio file, kept as its encoded bytes.

Stored in the [`AssetManager`](pill_engine::AssetManager) and addressed by
`Handle<Sound>`. A new decoder is built for each playback, so two entities
can play the same sound at once.

## Examples

```no_run
# use pill_audio::Sound;
# fn demo(assets: &mut pill_engine::AssetManager) -> Result<(), pill_audio::SoundLoadError> {
let sound = Sound::load(std::path::Path::new("assets/footstep.wav"))?;
let handle = assets.add_named("footstep", sound).expect("a fresh name");
# Ok(())
# }
```

`Debug` prints the path and the byte count instead of the bytes.

Mirrored to C# as `pill_audio.Sound`: a managed project imports one with
`assets.Import<Sound>(path, ...)` and builds one with `Sound.Load` or
`Sound.FromBytes`.

The attribute declares the type, so the world's asset store re-points its
table at the generation still mapped without a call in the module's
`register`.

## Fields

<a id="rustdoc-item-601"></a>

### `path`

```rust
path: std::path::PathBuf
```

Path the bytes were read from, or the label [`Sound::from_bytes`](#rustdoc-item-600) was
given.

<a id="rustdoc-item-604"></a>

### `bytes`

```rust
bytes: std::sync::Arc<[u8]>
```

The encoded bytes, as they were read or handed over.

## Associated functions and methods

<a id="rustdoc-item-598"></a>

### `load`

```rust
pub fn load(path: &std::path::Path) -> Result<Self, SoundLoadError>;
```

Read an audio file into memory.

The path is read through [`asset_store`](pill_engine::asset_store) like
every other asset: a relative path is looked up in a mounted pack first
(a shipping or web build), then below the project's `res` directory.
The extension is checked against [`SUPPORTED_AUDIO_FORMATS`](constant.SUPPORTED_AUDIO_FORMATS.md#rustdoc-item-599) before any
bytes are read.

#### Errors

[`SoundLoadError::InvalidPath`](enum.SoundLoadError.md#rustdoc-item-607) when the extension is not supported or
no mount has the path, and [`SoundLoadError::Unreadable`](enum.SoundLoadError.md#rustdoc-item-608) when the file
was found but could not be read.

<a id="rustdoc-item-600"></a>

### `from_bytes`

```rust
pub fn from_bytes(path: &std::path::Path, bytes: Vec<u8>) -> Self;
```

Build a sound from bytes already in memory.

The path is kept for diagnostics only and is not checked, which is what
an embedded asset (`include_bytes!`) or a cooked one needs.

<a id="rustdoc-item-611"></a>

### `path`

```rust
pub fn path(self: &Self) -> &std::path::Path;
```

The path the bytes were read from, or the label [`Sound::from_bytes`](#rustdoc-item-600)
was given.

<a id="rustdoc-item-612"></a>

### `bytes`

```rust
pub fn bytes(self: &Self) -> &[u8];
```

The encoded bytes, unchanged since they were read or handed over.

<a id="rustdoc-item-613"></a>

### `decoder`

```rust
pub fn decoder(self: &Self) -> Option<rodio::Decoder<std::io::Cursor<ArcBytes>>>;
```

Build a decoder that plays this sound once.

A decoder reads its bytes straight through, so it is used up by one
playback and a second entity playing the same sound needs its own. It
reuses the sound's bytes instead of copying them, since building one
clones the `Arc` - a reference-count bump that costs the same for a
large file as for a small one.

Returns `None` when rodio cannot decode the bytes. [`Sound::load`](#rustdoc-item-598)
cannot rule that out, because it checks only the extension.

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
- `MirrorObject`
- `Asset`
- `MirrorValue`
- `MirrorReturn`
- `TraitAccessible<dyn Asset>`
- `Debug`
- `ImportedAsset`
