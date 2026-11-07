<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-683"></a>

# Function `pill_csharp_bridge::backend::resolved_system_name`

```rust
pub(in backend) fn resolved_system_name(name_length: extern "System" fn (_: u32) -> u32, copy_name: extern "System" fn (_: u32, _: *mut u8, _: u32) -> u8, system_index: u32) -> String;
```

Visibility: `{'restricted': {'parent': 400, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:1484`

Returns the name a system is registered under: the reflected one, or a
synthetic fallback when the assembly exposes none.

Separate from [`managed_system_name`](fn.managed_system_name.md#rustdoc-item-682) because two callers must agree on the
fallback - registration records what this returns, and the reload compares
against it. A fallback applied in only one of them would make every poll of
a nameless assembly look like a rename.
