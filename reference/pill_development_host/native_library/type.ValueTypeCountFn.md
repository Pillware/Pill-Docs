<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3184"></a>

# Type alias `pill_development_host::native_library::ValueTypeCountFn`

```rust
pub(in native_library) type ValueTypeCountFn = unsafe extern "C" fn () -> u32;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:579`

Signature of the optional value-type manifest exports.

The module artifact reports how many `#[derive(PillMirror)]` descriptors it
carries, then copies that many into a host-owned buffer. Both sides share
the `pill_engine` rlib, so `PillValueTypeDescriptor` has one layout.
