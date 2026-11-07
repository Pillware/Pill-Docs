<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1494"></a>

# Function `pill_csharp_bridge::manifest::validate_field_manifest`

```rust
pub(crate) fn validate_field_manifest(field: &ManagedFieldManifest, parent_size: usize) -> Result<(), String>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:428`

Check that one field and all of its nested fields fit inside the struct
that contains them, and that sibling fields never overlap.

The field tree is walked with an explicit worklist, so deeply nested input
uses heap memory instead of the stack. The depth limit refuses a
pathological manifest before it costs any real work.

## Errors

Returns an error when a field overflows its containing struct, names an
empty field or type, or declares a type outside the [`BLITTABLE_LEAVES`](constant.BLITTABLE_LEAVES.md#rustdoc-item-1321)
vocabulary. It also fails when a leaf sits at an offset that is not a
multiple of its natural alignment, when a handle is not exactly
[`HANDLE_SIZE`](constant.HANDLE_SIZE.md#rustdoc-item-1250) bytes at a [`HANDLE_ALIGNMENT`](constant.HANDLE_ALIGNMENT.md#rustdoc-item-1251)-byte boundary or declares a
default, when a default does not parse or does not fill the field exactly,
when a decorator is out of range, when sibling fields overlap, or when the
nesting limit is exceeded.
