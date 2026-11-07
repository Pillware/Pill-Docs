<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2817"></a>

# Constant `pill_development_host::layout_record::MISSING_SOURCE_HASH`

```rust
pub(in layout_record) const MISSING_SOURCE_HASH: u64 = 0;
```

Visibility: `{'restricted': {'parent': 2774, 'path': '::layout_record'}}` · Source: `hosting\pill_development_host\src\layout_record.rs:199`

Hash a file cannot be read at all.

Distinct from any content hash a file can produce, so a source that goes
missing reads as a change and one that comes back reads as a second one.
