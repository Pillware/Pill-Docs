<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4552"></a>

# Function `pill_development_host::asset_browser::move_asset`

```rust
pub fn move_asset(asset_directory: &std::path::Path, from: &str, to: &str) -> Result<(), String>;
```

Source: `hosting\pill_development_host\src\asset_browser.rs:396`

Moves the asset at `from` to `to` (both relative to `res`) together with
its `.meta`, through [`pill_assets::move_asset`]. The asset watcher then
follows the move, so the loaded asset keeps its handle and guid.

## Errors

A message when either path leaves `res`, when the move is refused (the
source is missing or is a `.meta` file, or the target exists), or when a
rename fails.
