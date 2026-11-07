<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1554"></a>

# Function `pill_editor::runner::engine_asset_rows`

```rust
pub(in runner) fn engine_asset_rows(world: &pill_engine_core::World, listing: &[pill_editor_core::editor_state::AssetListing]) -> Vec<pill_editor_core::editor_state::EngineAsset>;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4053`

The store's own assets that no file in the project backs - a chain's
built-in passes, the renderer's default material - in the form the pickers
offer them.

An asset the listing already holds is left out, because the file names that
same asset and two rows for one asset would be two ways to pick one thing.
