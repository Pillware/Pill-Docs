<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1594"></a>

# Function `pill_engine_core::asset_import_registry::guid_clause`

```rust
pub(in asset_import_registry) fn guid_clause(guid: &Option<crate::asset::AssetGuid>) -> String;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:525`

Builds the ` with guid <guid>` part of a wrong-type message. It is empty
when there is no guid, so the message names one only when the caller's
answer carries one.
