<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1325"></a>

# Function `pill_csharp_bridge::manifest::is_blittable`

```rust
pub(in manifest) fn is_blittable(primitive_type: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 1247, 'path': '::manifest'}}` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:240`

Whether a manifest may declare a field of this type. That is an accepted
leaf, or a nested value struct, whose own fields are validated against this
same vocabulary.
