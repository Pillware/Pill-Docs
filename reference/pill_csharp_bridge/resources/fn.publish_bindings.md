<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1995"></a>

# Function `pill_csharp_bridge::resources::publish_bindings`

```rust
pub(in resources) fn publish_bindings(bindings: std::collections::HashMap<super::components::StableComponentId, ResourceBinding>);
```

Visibility: `{'restricted': {'parent': 1993, 'path': '::resources'}}` · Source: `csharp\pill_csharp_bridge\src\resources.rs:179`

Replaces the live table with one generation's bindings.

It replaces rather than merges, because a reload's manifest is the complete
list of what the arriving generation declares, so a resource it dropped
must stop resolving. This function does not touch the engine's storage: a
stored value stays until `drop_resources` releases it, so replacing the
table only stops managed code from resolving the resource.
