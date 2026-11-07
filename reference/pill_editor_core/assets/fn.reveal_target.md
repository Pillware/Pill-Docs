<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-181"></a>

# Function `pill_editor_core::assets::reveal_target`

```rust
pub fn reveal_target(asset_root: &std::path::Path, path: &str) -> Result<std::path::PathBuf, String>;
```

Source: `editor\pill_editor_core\src\assets.rs:711`

Returns the absolute path a reveal opens, for a project-relative asset
path.

The empty path is the asset root itself, which is the Assets panel's open
folder at the top; a nested path is joined below it. A path that climbs out
of the root, or one that names nothing on disk, is refused with a message
instead of being opened, so a stale row never makes the OS open something
else.

## Errors

Returns a message naming the refusal when the path is absolute, climbs out
of the asset directory, or is not on disk. The executable logs the message
instead of opening anything.
