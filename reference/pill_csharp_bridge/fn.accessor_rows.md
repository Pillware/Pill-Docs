<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2142"></a>

# Function `pill_csharp_bridge::accessor_rows`

```rust
pub fn accessor_rows(accessors: &[ResolvedFieldAccessor]) -> Vec<ResolvedMirrorMethod>;
```

Source: `csharp\pill_csharp_bridge\src\lib.rs:187`

Converts heap-field accessors into mirror-method rows. The managed
runtime then resolves them through the same table as mirrored value-type
methods, and refreshes that table the same way on each reload.
