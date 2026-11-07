<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6437"></a>

# Function `pill_engine_core::persistence::resources::serialize_foreign_resource`

```rust
pub(in persistence) fn serialize_foreign_resource(resource: &crate::resource::ErasedResource) -> Vec<u8>;
```

Visibility: `{'restricted': {'parent': 6349, 'path': '::persistence'}}` · Source: `engine\pill_engine_core\src\persistence\resources.rs:533`

Encode a foreign resource's payload as a JSON array of byte values.

Nothing interprets the bytes here, and nothing needs to: the payload is
plain memory and its layout is all there is to know about it. Writing it as
JSON rather than raw bytes keeps a snapshot in one format, so a reader never
has to know whether a resource is declared in Rust or in another language.
