<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-730"></a>

# Function `pill_engine_core::asset_store::read`

```rust
pub fn read(path: &std::path::Path) -> crate::asset::AssetLoadResult<Vec<u8>>;
```

Source: `engine\pill_engine_core\src\asset_store.rs:533`

Read the bytes of the asset at `path` from the first place that has it.

An absolute path is read from the filesystem as it is. A relative path is
looked up in every pack, then below the project's asset directory, then in
each module root, and last in the development fallbacks: the working
directory itself, its `res`, `$PROJECT_PATH/res` and the executable's
`res`.

Once [`restrict_to_packs`](fn.restrict_to_packs.md#rustdoc-item-2410) has been called, only the packs, a mounted
directory and the module roots are read. A shipped build calls it right
after it mounts the pack it was built with, so a pack miss is a missing
asset rather than a file the machine happens to have.

## Errors

[`AssetLoadError::PathNotFound`](../asset/enum.AssetLoadError.md#rustdoc-item-731) when no mount has the path, or
[`AssetLoadError::Read`](../asset/enum.AssetLoadError.md#rustdoc-item-732) when the file was found but could not be read.
