<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3943"></a>

# Function `pill_development_host::asset_browser::create_standalone_asset`

```rust
pub fn create_standalone_asset(world: &mut pill_engine::World, asset_directory: &std::path::Path, type_name: &str, folder: &str, name: &str) -> Result<String, String>;
```

Source: `hosting\pill_development_host\src\asset_browser.rs:448`

Creates a new standalone asset of `type_name` called `name` in `folder`
(relative to `res`; empty for `res` itself) and loads it. Returns its path
relative to `res`.

The file holds the standard header (format version, type name and a new
random guid) and the type's default document, which is a valid asset on its
own. It is written with [`pill_engine::asset_store::write_new`], so an
existing file is never replaced, and then imported through the registry, so
the caller gets a loaded asset at once. When the asset watcher sees the new
file later, it finds the asset already loaded and reimports it in place.

## Errors

A message when no asset types are registered, when the type is not a live
standalone type, when the folder leaves `res` or does not exist, when the
name is refused (see [`standalone_file_name`]), when the file already
exists, when the type's default document cannot be built, when no random
source exists for the new guid, or when the file cannot be written or
loaded.
