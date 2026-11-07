<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1190"></a>

# Function `pill_csharp_bridge::csharp_runtime::find_hostfxr_library_path`

```rust
pub(in csharp_runtime) fn find_hostfxr_library_path() -> Result<std::path::PathBuf, pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 1118, 'path': '::csharp_runtime'}}` · Source: `csharp\pill_csharp_bridge\src\csharp_runtime.rs:395`

Finds the newest installed `hostfxr` library.

If `ECS_DOTNET_HOSTFXR` is set, it wins, and its path must be a file.
Otherwise every configured .NET root is searched and the newest `hostfxr`
version is picked. A prerelease only wins when no stable release of the same
base version exists.

An override is checked to be a file. A path found by the search is not
checked, so a .NET installation without the library file only fails when the
caller tries to load it.

## Errors

- [`CSharpError::HostfxrOverrideNotAFile`]: `ECS_DOTNET_HOSTFXR` is set but
  does not name a regular file.
- [`CSharpError::HostfxrNotFound`]: no `host/fxr` version directory exists
  under any configured .NET root.
