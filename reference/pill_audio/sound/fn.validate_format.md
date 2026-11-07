<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-657"></a>

# Function `pill_audio::sound::validate_format`

```rust
pub(crate) fn validate_format(path: &std::path::Path) -> Result<(), pill_core::utils::AssetPathError>;
```

Visibility: `crate` · Source: `extensions\pill_audio\pill_audio\src\sound.rs:281`

Check that the extension of `path` is one of [`SUPPORTED_AUDIO_FORMATS`](constant.SUPPORTED_AUDIO_FORMATS.md#rustdoc-item-469).

Only the extension is checked, never whether the file exists, because a
packed sound has no file on disk. Reading the path answers that question.
