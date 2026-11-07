<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2775"></a>

# Constant `pill_development_host::layout_record::LAYOUT_RECORD_VERSION`

```rust
pub(crate) const LAYOUT_RECORD_VERSION: u32 = 1;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\layout_record.rs:59`

Version of the record format.

A record written by a different version is discarded instead of compared: a
change to what is hashed would otherwise read as "every layout changed" and
drop every declared resource once.
