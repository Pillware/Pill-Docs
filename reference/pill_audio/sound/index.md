<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-473"></a>

# Module `pill_audio::sound`

Source: `extensions\pill_audio\pill_audio\src\sound.rs:1`

The [`Sound`](struct.Sound.md#rustdoc-item-228) asset: an audio file held as its encoded bytes.
The [`Sound`](struct.Sound.md#rustdoc-item-228) asset: an audio file kept as its encoded bytes.

## Responsibilities

- Declares [`Sound`](struct.Sound.md#rustdoc-item-228), stored in the
  [`AssetManager`](pill_engine::AssetManager) and addressed by
  `Handle<Sound>`.
- Checks a file's extension and reads its bytes through the asset store
  ([`Sound::load`](struct.Sound.md#rustdoc-item-468)), so a packed sound loads like one on disk.
- Imports a sound through its `.meta` file
  ([`ImportedAsset`](pill_engine::ImportedAsset), with
  [`SoundImportSettings`](struct.SoundImportSettings.md#rustdoc-item-534)), which gives it a stable guid.
- Gives the playback code a new decoder over those bytes.

## Design

A sound is an asset rather than a resource because a world holds many of
them, and the type alone does not say which one is meant - the distinction
`pill_engine` draws between [`Resource`](pill_engine::Resource) and
[`Asset`](pill_engine::Asset).

The bytes stay encoded. A decoder can be used for one playback only, so
two entities that play one sound need two decoders. Holding decoded PCM
instead would take roughly ten times more memory per sound.

## Module contents

### Structs
- [`ArcBytes`](struct.ArcBytes.md#rustdoc-item-486) — A byte buffer shared through an `Arc`, which a decoder can read as a slice.
- [`Sound`](struct.Sound.md#rustdoc-item-228) — One loaded audio file, kept as its encoded bytes.
- [`SoundImportSettings`](struct.SoundImportSettings.md#rustdoc-item-534) — How a sound file is read, as stored in its `.meta` file.

### Enums
- [`SoundLoadError`](enum.SoundLoadError.md#rustdoc-item-480) — Why [`Sound::load`] could not produce a sound.

### Functions
- [`validate_format`](fn.validate_format.md#rustdoc-item-657) — Check that the extension of `path` is one of [`SUPPORTED_AUDIO_FORMATS`].

### Constants
- [`SUPPORTED_AUDIO_FORMATS`](constant.SUPPORTED_AUDIO_FORMATS.md#rustdoc-item-469) — Audio container formats [`Sound::load`] accepts, lowercase and without the
