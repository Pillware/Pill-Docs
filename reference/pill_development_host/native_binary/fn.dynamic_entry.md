<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3321"></a>

# Function `pill_development_host::native_binary::dynamic_entry`

```rust
pub(in native_binary) fn dynamic_entry(reader: &ByteReader<'_>, is_64_bit: bool, entry_offset: usize) -> Option<(i64, u64)>;
```

Visibility: `{'restricted': {'parent': 3148, 'path': '::native_binary'}}` · Source: `hosting\pill_development_host\src\native_binary.rs:705`

One `(tag, value)` dynamic-table entry at `entry_offset`.
