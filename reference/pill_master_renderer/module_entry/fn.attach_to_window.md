<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3088"></a>

# Function `pill_master_renderer::module_entry::attach_to_window`

```rust
pub unsafe extern "C" fn attach_to_window(window: *const pill_renderer_api::RawWindowData, width: u32, height: u32) -> *mut std::ffi::c_void;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\module_entry.rs:57`

Builds a renderer on the window `window` describes.

Returns a `Box<Box<dyn PillRenderer>>` as a raw pointer. The host drives
the renderer through that pointer and releases it with [`detach_backend`](fn.detach_backend.md#rustdoc-item-3087),
which the exported `pill_renderer_detach` forwards to. The return is null
when `window` is null, when the renderer could not be created, or when
creating it panicked; every failure is logged here.

## Safety

`window`, when non-null, points to a valid [`RawWindowData`] that names a
live window. The caller keeps that window alive until it has passed the
returned pointer to [`detach_backend`](fn.detach_backend.md#rustdoc-item-3087).
