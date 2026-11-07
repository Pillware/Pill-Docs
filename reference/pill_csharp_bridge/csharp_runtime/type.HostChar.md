<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1119"></a>

# Type alias `pill_csharp_bridge::csharp_runtime::HostChar`

```rust
pub(in csharp_runtime) type HostChar = u16;
```

Visibility: `{'restricted': {'parent': 1118, 'path': '::csharp_runtime'}}` · Source: `csharp\pill_csharp_bridge\src\csharp_runtime.rs:48`

The character type `hostfxr` expects in strings on this platform.

Windows `hostfxr` takes UTF-16 code units; Unix `hostfxr` takes the raw
bytes of the string. The alias follows the platform, so the exported
signatures below work on both.
