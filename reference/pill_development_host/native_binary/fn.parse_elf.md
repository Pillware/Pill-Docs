<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3317"></a>

# Function `pill_development_host::native_binary::parse_elf`

```rust
pub(in native_binary) fn parse_elf(image_bytes: &[u8]) -> Option<ElfImage>;
```

Visibility: `{'restricted': {'parent': 3148, 'path': '::native_binary'}}` · Source: `hosting\pill_development_host\src\native_binary.rs:293`

Reads an ELF image's dependencies and dynamic symbols.

Returns `None` when the image is not ELF, when its class or byte order is
not one this reader knows, or when its section table lies outside the file.
