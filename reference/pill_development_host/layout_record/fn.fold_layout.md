<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3033"></a>

# Function `pill_development_host::layout_record::fold_layout`

```rust
pub(in layout_record) fn fold_layout(sources: &[SourceDigest], dependencies: &[DependencyVersion]) -> u64;
```

Visibility: `{'restricted': {'parent': 2774, 'path': '::layout_record'}}` · Source: `hosting\pill_development_host\src\layout_record.rs:231`

One hash over a layout's sources and dependencies.

Both lists are sorted by name first, so the order a resource declares them
in cannot change the fingerprint. Adding a crate to the lockfile that no
resource declares changes nothing.
