<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1321"></a>

# Constant `pill_csharp_bridge::manifest::BLITTABLE_LEAVES`

```rust
pub(in manifest) const BLITTABLE_LEAVES: &[BlittableLeaf] = _;
```

Visibility: `{'restricted': {'parent': 1247, 'path': '::manifest'}}` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:114`

The managed blittable field vocabulary: one row per accepted leaf type.

This table is what makes `ComponentColumn`'s `unsafe impl Send`/`Sync`
sound and what lets its rows be freed without drop glue. The column is a raw
byte buffer: rows are moved with `ptr::copy` and the buffer is freed without
running any destructor. Every field must therefore be a blittable value with
no ownership, no interior pointer, and nothing to release.

A nested value type is a shape, not a leaf: it has no row here. Validation
recurses into its own fields instead of looking it up.
