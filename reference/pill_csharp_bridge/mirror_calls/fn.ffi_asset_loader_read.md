<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1739"></a>

# Function `pill_csharp_bridge::mirror_calls::ffi_asset_loader_read`

```rust
pub(crate) extern "C" fn ffi_asset_loader_read(path: *const u8, path_length: u32, out_data: *mut *const u8, out_length: *mut u32) -> u8;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\mirror_calls.rs:213`

Reads the file at `path` for `AssetLoader.Load()`.

A relative path is looked up in the mounted packs first, then below the
project's asset directory and the module roots; an absolute path is read
from the filesystem as it is. A shipped build reads only the packs, the
mounted directories and the module roots. On success both outputs point at
the bytes, which stay valid on this thread until the next call that hands
bytes out.

## Safety

`path` must be null or point at `path_length` readable bytes. Both outputs
must be null or point at a writable value of their type, which the caller
keeps for the duration of the call.

## Errors

Returns `STATUS_NULL_OUTPUT` (`5`) when either output is null,
`STATUS_MISSING` (`1`) when the read failed, with its message in the
last-error channel, and `STATUS_PANICKED` (`4`) when the call panicked. It
returns `STATUS_OK` (`0`) after writing both outputs.
