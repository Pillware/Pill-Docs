<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-223"></a>

# Function `pill_master_renderer::error::capturing_validation`

```rust
pub(crate) fn capturing_validation<T, impl FnOnce() -> T: FnOnce() -> T>(device: &wgpu::Device, make: impl FnOnce() -> T) -> std::result::Result<T, String>;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\error.rs:196`

Runs a block of GPU work and captures any error wgpu raises for it.

wgpu reports a refused pipeline, bind group or texture to the device's
uncaptured-error handler. The call itself returns nothing to check. A
capture turns the refusal into a message the caller can attach to whatever
asked for the work, so the problem names the pass that is not drawn instead
of failing the whole frame. A build that cannot capture returns the block's
result, and the handler logs the refusal.

## Errors

Returns the text of the captured error: the validation error if the block
provoked one, otherwise the out-of-memory or internal error. Returns the
block's result as `Ok` when wgpu reported nothing.
