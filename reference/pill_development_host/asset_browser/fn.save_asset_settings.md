<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4549"></a>

# Function `pill_development_host::asset_browser::save_asset_settings`

```rust
pub fn save_asset_settings(world: &mut pill_engine::World, asset_directory: &std::path::Path, path: &str, settings: serde_json::Value) -> Result<serde_json::Value, String>;
```

Source: `hosting\pill_development_host\src\asset_browser.rs:295`

Saves `settings` as the import settings of the asset at `path`, or as a
standalone asset's own document, and returns the normalized value that was
written.

The value is checked against the type first: missing fields get their
defaults and unknown ones are dropped, so a malformed edit is refused
before anything is written. A sourced asset without a `.meta` is imported
first, which writes one. The file is replaced atomically, and the asset
watcher then reimports the asset in place.

## Errors

A message when the path leaves `res`, when no asset types are registered,
when no type imports the file, when the settings do not fit the type, when
the source cannot be imported (which is what creates a missing `.meta`), or
when the file cannot be read, parsed or written.
