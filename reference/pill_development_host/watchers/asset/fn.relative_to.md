<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4301"></a>

# Function `pill_development_host::watchers::asset::relative_to`

```rust
pub(in watchers::asset) fn relative_to(asset_directory: &std::path::Path, path: &std::path::Path) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 4227, 'path': '::watchers::asset'}}` · Source: `hosting\pill_development_host\src\watchers\asset.rs:218`

Returns `path` relative to `asset_directory`, with `/` separators. Returns
`None` when the path is outside `asset_directory`, is that directory itself,
or is not UTF-8.
