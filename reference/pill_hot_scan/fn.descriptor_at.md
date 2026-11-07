<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-166"></a>

# Function `pill_hot_scan::descriptor_at`

```rust
pub(crate) fn descriptor_at(source: &str, mask: &[bool], declaration_start: usize, name: String, kind: HotFunctionKind, enclosing_type_and_trait: (Option<String>, Option<String>), annotated: bool) -> HotFunction;
```

Visibility: `crate` · Source: `hosting\pill_hot_scan\src\lib.rs:657`

Build one descriptor from a declaration byte offset.

Both scans work out the same per-declaration facts the same way - receiver,
signature, cfg gate, `#[inline(always)]` and ABI-entry status - so this is
the one place that does it, rather than the same constructor written twice.
