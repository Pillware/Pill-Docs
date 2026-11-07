<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1192"></a>

# Function `pill_csharp_bridge::csharp_runtime::collect_hostfxr_versions`

```rust
pub(in csharp_runtime) fn collect_hostfxr_versions(dotnet_root: &std::path::Path, versions: &mut Vec<HostfxrVersion>);
```

Visibility: `{'restricted': {'parent': 1118, 'path': '::csharp_runtime'}}` · Source: `csharp\pill_csharp_bridge\src\csharp_runtime.rs:473`

Adds every version directory under one .NET root's `host/fxr` to
`versions`.
