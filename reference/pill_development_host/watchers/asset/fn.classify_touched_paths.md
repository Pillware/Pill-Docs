<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4300"></a>

# Function `pill_development_host::watchers::asset::classify_touched_paths`

```rust
pub(in watchers::asset) fn classify_touched_paths(asset_directory: &std::path::Path, touched: &[std::path::PathBuf]) -> Vec<AssetChange>;
```

Visibility: `{'restricted': {'parent': 4227, 'path': '::watchers::asset'}}` · Source: `hosting\pill_development_host\src\watchers\asset.rs:163`

Turns the paths of one batch into one change per source, based on what is
on disk now.

What exists after the debounce is what counts, not the event kinds. When an
editor saves through a temporary file, one save shows up as a remove and a
create; the source file still being there is what makes it an edit.
