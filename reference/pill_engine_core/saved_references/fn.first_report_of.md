<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7611"></a>

# Function `pill_engine_core::saved_references::first_report_of`

```rust
pub(crate) fn first_report_of(guid: crate::asset::AssetGuid) -> bool;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\saved_references.rs:337`

Returns whether this is the first report of `guid` in this process, and
records the guid so later reports of it are not.

One set serves every place that reports an unresolvable reference, so a
guid named by both a typed field and a scene entry produces one warning,
not one per caller.
