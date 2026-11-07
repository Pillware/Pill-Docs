<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-603"></a>

# Function `pill_engine::hot_patch::with_qualified_name`

```rust
pub unsafe fn with_qualified_name<R, impl FnOnce(&str) -> R: FnOnce(&str) -> R>(qualified_name: *const std::ffi::c_char, refused: R, run_with_name: impl FnOnce(&str) -> R) -> R;
```

Source: `engine\pill_engine\src\hot_patch.rs:358`

Calls `run_with_name` with the qualified name a host passed across the C
ABI, or returns `refused` when there is no usable name.

"No usable name" means a null pointer or bytes that are not UTF-8. Every
export that finds something by name starts this way, so the check lives here
once instead of in each expansion. Each export has its own refusal value -
`0` for "no such function", `1` for "refused" - which is why the caller
passes it in.

## Safety

`qualified_name` must be null, or point at a NUL-terminated C string that
stays readable for the whole call.
