<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1193"></a>

# Function `pill_csharp_bridge::csharp_runtime::parse_hostfxr_version`

```rust
pub(in csharp_runtime) fn parse_hostfxr_version(directory_name: &str) -> (Vec<u32>, bool);
```

Visibility: `{'restricted': {'parent': 1118, 'path': '::csharp_runtime'}}` · Source: `csharp\pill_csharp_bridge\src\csharp_runtime.rs:503`

Splits a `hostfxr` directory name into a version key that can be compared.

The key holds the numeric parts that come before the first non-numeric
part. A name with any non-numeric part (for example `8.0.0-preview.7`) is
marked non-stable, so a stable release of the same base version wins.
