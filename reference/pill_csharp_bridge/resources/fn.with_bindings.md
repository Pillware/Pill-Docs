<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1994"></a>

# Function `pill_csharp_bridge::resources::with_bindings`

```rust
pub(in resources) fn with_bindings<R, impl FnOnce(&ResourceBindings) -> R: FnOnce(&std::collections::HashMap<super::components::StableComponentId, ResourceBinding>) -> R>(body: impl FnOnce(&std::collections::HashMap<super::components::StableComponentId, ResourceBinding>) -> R) -> R;
```

Visibility: `{'restricted': {'parent': 1993, 'path': '::resources'}}` · Source: `csharp\pill_csharp_bridge\src\resources.rs:157`

Runs `body` with the live table.

A panic while the lock is held cannot leave the map wrong: it holds plain
data, and a writer finishes or abandons one whole entry. A poisoned lock is
therefore treated as healthy rather than becoming a new failure for every
later resource access. `BindingStore` follows the same rule.
