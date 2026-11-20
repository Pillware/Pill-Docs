<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4805"></a>

# Function `pill_development_host::asset_browser::read_guid`

```rust
pub(in asset_browser) fn read_guid(path: &std::path::Path) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 4719, 'path': '::asset_browser'}}` · Source: `hosting\pill_development_host\src\asset_browser.rs:250`

Returns the `guid` field of the asset header stored in `path`, if the file
has one.
