<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4548"></a>

# Function `pill_development_host::asset_browser::asset_settings`

```rust
pub fn asset_settings(world: &pill_engine::World, path: &str) -> Result<serde_json::Value, String>;
```

Source: `hosting\pill_development_host\src\asset_browser.rs:269`

Returns the import settings of the asset at `path` as JSON, or the
standalone asset's own document. The value is what the file holds, or the
type's defaults when the file holds nothing yet.

## Errors

A message when the path leaves `res`, when no asset types are registered,
when no registered type imports the file, or when the file cannot be read.
