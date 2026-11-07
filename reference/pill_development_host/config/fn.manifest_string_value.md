<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1265"></a>

# Function `pill_development_host::config::manifest_string_value`

```rust
pub(in config) fn manifest_string_value(manifest: &str, section: &str, key: &str) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1644`

Reads a string value out of one section of a TOML manifest.

Used only for the handful of fields the host infers from a `Cargo.toml`
(the package name and the library name). A manifest that does not parse
therefore answers `None`, exactly like a missing key. The same manifest is
parsed again, with the error reported, when the workspace member is
written.
