<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1789"></a>

# Function `pill_master_renderer::readback::read_mapped`

```rust
pub(crate) fn read_mapped<T, impl FnOnce(&[u8]) -> T: FnOnce(&[u8]) -> T>(buffer: &wgpu::Buffer, read: impl FnOnce(&[u8]) -> T) -> Readback<T>;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\readback.rs:211`

Reads a mapped buffer through `read`, unmapping it either way.

A read that fails still unmaps the buffer. Leaving it mapped would stop
every later use of the buffer.
