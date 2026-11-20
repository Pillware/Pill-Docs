<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3323"></a>

# Function `pill_development_host::native_binary::string_at`

```rust
pub(in native_binary) fn string_at(reader: &ByteReader<'_>, string_table: SectionHeader, string_offset: usize) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 3148, 'path': '::native_binary'}}` · Source: `hosting\pill_development_host\src\native_binary.rs:741`

The NUL-terminated string at `string_offset` inside `string_table`.

The search stops at the end of the table, so a table whose last string is
unterminated still yields that string instead of running into the section
that follows it.
