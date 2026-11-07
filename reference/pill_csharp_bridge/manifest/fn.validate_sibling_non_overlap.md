<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1493"></a>

# Function `pill_csharp_bridge::manifest::validate_sibling_non_overlap`

```rust
pub(crate) fn validate_sibling_non_overlap(fields: &[ManagedFieldManifest], parent_name: &str) -> Result<(), String>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:392`

Reject sibling fields that share any byte range.

Two fields that share bytes would overwrite each other's values with no
error, so an overlap and a duplicated offset are both invalid layouts.

## Errors

Returns an error naming the first pair of sibling fields that overlap.
