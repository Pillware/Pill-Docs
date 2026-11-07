<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-469"></a>

# Constant `pill_audio::sound::SUPPORTED_AUDIO_FORMATS`

```rust
pub const SUPPORTED_AUDIO_FORMATS: &[&str] = _;
```

Source: `extensions\pill_audio\pill_audio\src\sound.rs:41`

Audio container formats [`Sound::load`](struct.Sound.md#rustdoc-item-468) accepts, lowercase and without the
leading dot.

A path's extension is checked before any bytes are read. An unsupported
extension is reported with the extension and this list, and a path with no
extension is reported with the path, so neither reaches the decoder.
