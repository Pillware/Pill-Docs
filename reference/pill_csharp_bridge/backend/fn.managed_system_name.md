<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-682"></a>

# Function `pill_csharp_bridge::backend::managed_system_name`

```rust
pub(in backend) fn managed_system_name(name_length: extern "System" fn (_: u32) -> u32, copy_name: extern "System" fn (_: u32, _: *mut u8, _: u32) -> u8, system_index: u32) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 400, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:1499`

Copies one managed system's declared name.

A thin wrapper over the shared two-call protocol that closes over the
system index. Every failure comes back as `None`: a name the managed side
does not report, one that is too long, one that fails to copy, or bytes
that are not valid UTF-8. In each case there is no name to use.
