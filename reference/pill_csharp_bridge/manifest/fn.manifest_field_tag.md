<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1498"></a>

# Function `pill_csharp_bridge::manifest::manifest_field_tag`

```rust
pub(crate) fn manifest_field_tag(field: &ManagedFieldManifest) -> &'static str;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:627`

The engine-vocabulary tag a field takes in a migration plan.

For a leaf it is the tag [`managed_field_layout`](fn.managed_field_layout.md#rustdoc-item-1497) records, and for a handle
its `struct:Handle<...>` tag. A nested struct is `struct`, which is also
what the plan folds the registry's longer tag to, so both sides compare like
with like. A leaf the engine cannot decode (the pointer-width types) carries
no tag and reads `unsupported`.
