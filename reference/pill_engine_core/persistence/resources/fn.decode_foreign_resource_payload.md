<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6439"></a>

# Function `pill_engine_core::persistence::resources::decode_foreign_resource_payload`

```rust
pub(in persistence) fn decode_foreign_resource_payload(payload: &[u8], expected_size: usize) -> Option<Vec<u8>>;
```

Visibility: `{'restricted': {'parent': 6349, 'path': '::persistence'}}` · Source: `engine\pill_engine_core\src\persistence\resources.rs:547`

Decode the byte array [`serialize_foreign_resource`](fn.serialize_foreign_resource.md#rustdoc-item-6437) wrote.

Returns `None` unless the payload is an array of exactly `expected_size`
numbers that all fit in a byte. Anything else cannot be laid over the
declared layout without inventing bytes.
