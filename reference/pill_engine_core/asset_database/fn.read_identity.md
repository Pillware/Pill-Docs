<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1296"></a>

# Function `pill_engine_core::asset_database::read_identity`

```rust
pub(in asset_database) fn read_identity(bytes: &[u8]) -> Option<(String, crate::asset::AssetGuid)>;
```

Visibility: `{'restricted': {'parent': 1241, 'path': '::asset_database'}}` · Source: `engine\pill_engine_core\src\asset_database.rs:310`

Returns the `asset_type` and the `guid` of a header that this engine can
read, or `None` when it cannot.

The header rules live in
[`asset_metadata::read_header`](../asset_metadata/fn.read_header.md#rustdoc-item-1295), so the
index and the importer agree on which format versions are readable and what
a guid looks like. The index needs only the identity, not the body, and has
no one to report a refusal to, so a refused header becomes `None`.
