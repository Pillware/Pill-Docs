<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-220"></a>

# Function `pill_master_renderer::error::captured`

```rust
pub(crate) async fn captured<T, impl FnOnce() -> T: FnOnce() -> T>(device: &wgpu::Device, make: impl FnOnce() -> T) -> (T, CapturedErrors);
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\error.rs:134`

Runs `make` with wgpu's errors captured, and waits for wgpu's answers.

Use this for work done while the renderer is built. That work already runs
asynchronously, so both the browser and native builds can wait for the error
scopes.
