<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3862"></a>

# Type alias `pill_development_host::runtime::ShaderChangedFunction`

```rust
pub(in runtime) type ShaderChangedFunction = unsafe extern "C" fn (world: *mut pill_engine::World, path: *const u8, path_len: usize, wgsl: *const u8, wgsl_len: usize) -> u32;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:102`

Signature of [`SHADER_CHANGED_EXPORT`](constant.SHADER_CHANGED_EXPORT.md#rustdoc-item-3858): the world, the re-cooked file's
path relative to the crate's `shader_sources/`, and its WGSL; returns how
many shader assets changed.
