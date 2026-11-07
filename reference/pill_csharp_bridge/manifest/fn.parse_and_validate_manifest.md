<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1504"></a>

# Function `pill_csharp_bridge::manifest::parse_and_validate_manifest`

```rust
pub(crate) fn parse_and_validate_manifest(bytes: &[u8]) -> Result<Vec<ManagedManifestEntry>, pill_core::error::CSharpError>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:855`

Parse a managed manifest and check every entry against its own identity.

Every check here is a property of the manifest alone: identity, uniqueness
and the shape of each layout. The startup path and the reload path both run
it before they touch the world, so both validate exactly the same thing.

## Errors

Returns a [`CSharpError`] when the bytes do not parse as a manifest, when an
entry's identity does not match its full name, when two entries declare one
identity, or when an alias is empty, names a live declaration or is declared
by two entries. It also fails on an invalid layout (a size of zero or above
`u32::MAX`, a zero or non-power-of-two alignment, or a layout the allocator
cannot express), on overlapping sibling fields, on any error
[`validate_field_manifest`](fn.validate_field_manifest.md#rustdoc-item-1494) reports, and on a resource marked `shared`.
