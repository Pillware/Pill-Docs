<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2411"></a>

# Function `pill_engine_core::asset_store::pack_key`

```rust
pub(crate) fn pack_key(path: &std::path::Path) -> Option<String>;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\asset_store.rs:562`

The key `path` is packed under: its components joined with `/`.

Returns `None` for a path no pack can hold: an empty path, an absolute
path, one that climbs out with `..`, or one that is not UTF-8.

The key is also the name an asset loaded from this path gets, so the two
can never disagree. A `\` separates components on every target, not only
on Windows, so a path written on one machine names the same asset on
another.
