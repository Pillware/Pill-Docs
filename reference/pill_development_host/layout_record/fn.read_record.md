<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3068"></a>

# Function `pill_development_host::layout_record::read_record`

```rust
pub(crate) fn read_record(target: &LayoutRecordTarget<'_>) -> LayoutRecord;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\layout_record.rs:348`

Reads a subject's record.

A missing, unreadable or version-mismatched record reads as empty: the next
load then finds nothing to compare against and keeps every value, which is
the answer that cannot break a run.
