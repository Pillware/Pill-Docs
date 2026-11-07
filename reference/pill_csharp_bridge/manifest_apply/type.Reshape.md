<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1511"></a>

# Type alias `pill_csharp_bridge::manifest_apply::Reshape`

```rust
pub(in manifest_apply) type Reshape<Declaration, Binding, Undo> = fn (_: &mut pill_engine::Engine, _: super::components::StableComponentId, _: &Binding, _: &Declaration) -> Result<(Binding, Option<Undo>), pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 970, 'path': '::manifest_apply'}}` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:73`

Migrate a live entry's stored data into the arriving shape.
