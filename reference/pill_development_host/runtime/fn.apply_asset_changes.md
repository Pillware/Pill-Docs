<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4218"></a>

# Function `pill_development_host::runtime::apply_asset_changes`

```rust
pub(in runtime) fn apply_asset_changes(host: &mut DevHost) -> usize;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:3520`

Import or reimport every asset the watcher reported, through the world's
import registry.

A source moved together with its metadata file is followed. The loaded
asset takes the new name and keeps its handle and guid, and its old path's
deletion is not reported. A new source is imported, writing its metadata
file. A loaded one is decoded again into its slot, keeping its handle and
guid.

Nothing here ever removes an asset. A failed reimport leaves the loaded
value in place, and a deleted source stays loaded until the next run,
because components may still hold its handle.
