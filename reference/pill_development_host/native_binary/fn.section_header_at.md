<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3320"></a>

# Function `pill_development_host::native_binary::section_header_at`

```rust
pub(in native_binary) fn section_header_at(reader: &ByteReader<'_>, table_offset: usize, entry_size: usize, index: usize, is_64_bit: bool) -> Option<SectionHeader>;
```

Visibility: `{'restricted': {'parent': 3148, 'path': '::native_binary'}}` · Source: `hosting\pill_development_host\src\native_binary.rs:662`

One section header at `index`, through `reader` whose byte 0 is the section
table's first entry.
