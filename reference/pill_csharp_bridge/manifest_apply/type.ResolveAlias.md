<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1509"></a>

# Type alias `pill_csharp_bridge::manifest_apply::ResolveAlias`

```rust
pub(in manifest_apply) type ResolveAlias<Binding> = fn (_: &pill_engine::Engine, _: &std::collections::HashMap<super::components::StableComponentId, Binding>, _: &str) -> Result<Option<super::components::StableComponentId>, pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 970, 'path': '::manifest_apply'}}` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:65`

Resolve one alias to the live table entry it names, if any.
