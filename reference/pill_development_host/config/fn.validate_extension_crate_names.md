<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1343"></a>

# Function `pill_development_host::config::validate_extension_crate_names`

```rust
pub(crate) fn validate_extension_crate_names(extensions_root: &std::path::Path) -> Result<(), pill_core::error::ConfigError>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:2183`

Refuses an extension crate whose package name disagrees with the folder it
sits in.

An editor crate is the crate in `modules/editor`, and its package name must
end in [`EDITOR_CRATE_SUFFIX`](constant.EDITOR_CRATE_SUFFIX.md#rustdoc-item-842); a runtime crate must not carry that suffix.
Splitting the two markers would let a crate load as an editor part by
location while `modules:` or a shipping bundle selected it as a runtime
module.

The folder also spells the crate it holds: a runtime crate is named after
its extension folder (`extensions/pill_audio/modules/runtime` holds
`pill_audio`) and an editor crate after that folder plus the suffix
(`pill_audio_editor`). A path therefore names the crate it holds, and the
conventional path a missing crate falls back to resolves to a real
directory. The master renderer's nested runtime crates are exempt, because
`extensions/pill_master_renderer/modules/runtime` groups two crates whose
names cannot both equal the folder name.

## Errors

Returns [`ConfigError::EditorCrateNameMismatch`],
[`ConfigError::RuntimeCrateNameMismatch`] or
[`ConfigError::ExtensionFolderNameMismatch`], naming the crate.
