<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3441"></a>

# Type alias `pill_development_host::native_library::MirrorMethodCountFn`

```rust
pub(in native_library) type MirrorMethodCountFn = unsafe extern "C" fn () -> u32;
```

Visibility: `{'restricted': {'parent': 3326, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:858`

Signature of the optional mirrored-method manifest exports.

Same shape as the value-type manifest: the artifact reports how many
`#[pill_mirror_method]` descriptors it carries, then copies that many into
a host-owned buffer. Each descriptor carries the address of the
`#[no_mangle]` trampoline it was compiled with, so the host resolves
nothing by symbol.
