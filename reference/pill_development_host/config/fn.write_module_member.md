<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1358"></a>

# Function `pill_development_host::config::write_module_member`

```rust
pub(in config) fn write_module_member(member_directory: &std::path::Path, manifest: &str, source: &str) -> Result<(), pill_core::error::ConfigError>;
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:2809`

Writes one generated wrapper member's `Cargo.toml` and `src/lib.rs`,
leaving a file whose content is unchanged untouched.

## Errors

Returns [`ConfigError::HostModuleMemberCreationFailed`] when a directory or
file cannot be written.
