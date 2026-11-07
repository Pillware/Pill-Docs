<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4210"></a>

# Function `pill_development_host::runtime::start_asset_watcher`

```rust
pub(in runtime) fn start_asset_watcher(asset_directory: Option<&std::path::Path>, assets_hot_reloading: bool) -> Option<asset::AssetWatcher>;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:3292`

Start watching the project's asset directory, or `None` when there is none
or the watch cannot start (logged; the host runs on without it).

A configured directory that does not exist yet is created before the watch
starts. The editor imports dropped files into it, and a project that never
had a `res` would otherwise stay unwatched for the whole run, with files
sitting there unimported.
