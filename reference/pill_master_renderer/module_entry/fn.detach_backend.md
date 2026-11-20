<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3124"></a>

# Function `pill_master_renderer::module_entry::detach_backend`

```rust
pub unsafe extern "C" fn detach_backend(backend: *mut std::ffi::c_void);
```

Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\module_entry.rs:113`

Drops a renderer returned by [`attach_to_window`](fn.attach_to_window.md#rustdoc-item-3125), inside this image.

A null `backend` is ignored.

## Safety

`backend` is null, or a pointer that [`attach_to_window`](fn.attach_to_window.md#rustdoc-item-3125) of this same
image returned. It must not have been detached already, and the caller must
not use it again afterwards.
