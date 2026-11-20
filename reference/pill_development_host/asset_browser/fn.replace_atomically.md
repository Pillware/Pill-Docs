<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4809"></a>

# Function `pill_development_host::asset_browser::replace_atomically`

```rust
pub(in asset_browser) fn replace_atomically(target_file: &std::path::Path, bytes: &[u8]) -> Result<(), String>;
```

Visibility: `{'restricted': {'parent': 4719, 'path': '::asset_browser'}}` · Source: `hosting\pill_development_host\src\asset_browser.rs:369`

Writes `bytes` to a temporary sibling of `target_file`, then renames it over
`target_file`, so a reader never sees a half-written file.

## Errors

A message when `target_file` has no name, when the temporary sibling cannot
be written, or when the rename fails.
