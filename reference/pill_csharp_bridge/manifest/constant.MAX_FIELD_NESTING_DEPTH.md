<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1246"></a>

# Constant `pill_csharp_bridge::manifest::MAX_FIELD_NESTING_DEPTH`

```rust
pub(in manifest) const MAX_FIELD_NESTING_DEPTH: usize = 32;
```

Visibility: `{'restricted': {'parent': 1247, 'path': '::manifest'}}` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:46`

Maximum nesting depth accepted in a managed component field tree.

Real component layouts never exceed a handful of levels. The limit stays
below `serde_json`'s own parser recursion limit, so this check, not a vague
parser error, refuses a pathological manifest.
