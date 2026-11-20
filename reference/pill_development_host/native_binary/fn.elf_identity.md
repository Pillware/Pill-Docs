<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3318"></a>

# Function `pill_development_host::native_binary::elf_identity`

```rust
pub(in native_binary) fn elf_identity(header: &[u8]) -> Option<(bool, bool)>;
```

Visibility: `{'restricted': {'parent': 3148, 'path': '::native_binary'}}` · Source: `hosting\pill_development_host\src\native_binary.rs:623`

`EI_CLASS` and `EI_DATA`: whether the image is 64-bit, and its byte order.
