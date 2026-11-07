<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1505"></a>

# Function `pill_csharp_bridge::manifest::split_manifest_kinds`

```rust
pub(crate) fn split_manifest_kinds(manifest: Vec<ManagedManifestEntry>) -> (Vec<ManagedManifestEntry>, Vec<super::resources::ManagedResourceDeclaration>);
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:959`

Split one parsed manifest into its component and resource halves.

Both halves went through the same identity, layout and field validation
above; only what they are registered as differs.

## Panics

Panics when a declared default does not parse. Both callers pass a manifest
that [`parse_and_validate_manifest`](fn.parse_and_validate_manifest.md#rustdoc-item-1504) already validated, and that function
refuses such a default, so this cannot fire for them.
