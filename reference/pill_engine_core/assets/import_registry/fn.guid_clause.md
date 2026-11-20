<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-718"></a>

# Function `pill_engine_core::assets::import_registry::guid_clause`

```rust
pub(in assets::import_registry) fn guid_clause(guid: &Option<crate::asset::AssetGuid>) -> String;
```

Visibility: `{'restricted': {'parent': 425, 'path': '::assets::import_registry'}}` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:525`

Builds the ` with guid <guid>` part of a wrong-type message. It is empty
when there is no guid, so the message names one only when the caller's
answer carries one.
