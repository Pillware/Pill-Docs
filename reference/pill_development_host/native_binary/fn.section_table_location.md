<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3319"></a>

# Function `pill_development_host::native_binary::section_table_location`

```rust
pub(in native_binary) fn section_table_location(reader: &ByteReader<'_>, is_64_bit: bool) -> Option<(usize, usize, usize)>;
```

Visibility: `{'restricted': {'parent': 3148, 'path': '::native_binary'}}` · Source: `hosting\pill_development_host\src\native_binary.rs:641`

`e_shoff`, `e_shentsize` and `e_shnum`, read from an image header.
