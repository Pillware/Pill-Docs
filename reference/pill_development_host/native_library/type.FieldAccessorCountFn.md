<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3189"></a>

# Type alias `pill_development_host::native_library::FieldAccessorCountFn`

```rust
pub(in native_library) type FieldAccessorCountFn = unsafe extern "C" fn () -> u32;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:599`

Signature of the optional heap-field accessor manifest exports.

Same shape again: the artifact reports how many accessor descriptors it
carries, then copies that many into a host-owned buffer. Each descriptor
names the `#[no_mangle]` trampolines the artifact exports for one `Vec` or
`String` component field, which the host resolves by symbol for the
callable addresses.
