<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4543"></a>

# Function `pill_development_host::asset_browser::list_assets`

```rust
pub fn list_assets(world: &pill_engine::World, asset_directory: &std::path::Path) -> Vec<AssetEntry>;
```

Source: `hosting\pill_development_host\src\asset_browser.rs:105`

Lists every folder and file under `asset_directory`, depth first: folders
come before files, and each level is sorted by name. `.meta` files and
dot-files are left out.

The project's tree comes first. After it comes one read-only tree per
loaded module's resources ([`pill_engine::asset_store::module_roots`]), and
every entry names its root so a UI can tell the trees apart.
