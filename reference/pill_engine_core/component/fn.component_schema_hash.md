<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2939"></a>

# Function `pill_engine_core::component::component_schema_hash`

```rust
pub fn component_schema_hash(fields: &[crate::component_registry::ComponentFieldDescriptor]) -> u64;
```

Source: `engine\pill_engine_core\src\component.rs:502`

Structural hash over a component's declared field layout.

The hash is FNV-1a over the field descriptors rather than a `DefaultHasher`,
because the value is compared between separately compiled binaries. The
standard hasher's algorithm is explicitly unspecified and may change between
Rust releases, while this is a fixed function of the bytes.

Every field's name, type tag, offset, size, alignment and element count is
included, so a field that is reordered, retyped, padded differently or
resized changes the result even when the struct's total size does not.
