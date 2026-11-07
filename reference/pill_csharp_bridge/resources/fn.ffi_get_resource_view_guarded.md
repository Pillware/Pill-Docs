<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2039"></a>

# Function `pill_csharp_bridge::resources::ffi_get_resource_view_guarded`

```rust
pub(in resources) fn ffi_get_resource_view_guarded(stable_id_low: u64, stable_id_high: u64, access_mode: u8, view_output: *mut super::abi::ResourceView) -> u8;
```

Visibility: `{'restricted': {'parent': 1993, 'path': '::resources'}}` · Source: `csharp\pill_csharp_bridge\src\resources.rs:802`

Serves one resource's bytes to a managed `Res<T>` or `ResMut<T>`.

The managed side turns the status code into a message:

- `0`: the view was filled;
- `1`: the identity names no registered resource;
- `2`: the running system did not declare this access;
- `3`: no managed system is running on this thread;
- `4`: the world holds no value for the resource yet;
- `5`: the caller passed no output buffer.

The order matters. The scope is checked before the table, so a call from
outside a system reports that, rather than naming a resource it could not
have reached anyway.
