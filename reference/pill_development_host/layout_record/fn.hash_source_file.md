<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3032"></a>

# Function `pill_development_host::layout_record::hash_source_file`

```rust
pub(crate) fn hash_source_file(source_directory: &std::path::Path, declared_path: &str) -> u64;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\layout_record.rs:219`

Hash of one file's contents, or [`MISSING_SOURCE_HASH`](constant.MISSING_SOURCE_HASH.md#rustdoc-item-2817) when it cannot be
read.

A file of length zero hashes to the offset basis, never to the sentinel, so
"empty" and "missing" stay apart.
