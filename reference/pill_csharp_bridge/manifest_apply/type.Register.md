<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1510"></a>

# Type alias `pill_csharp_bridge::manifest_apply::Register`

```rust
pub(in manifest_apply) type Register<Declaration, Binding, Undo> = fn (_: &mut pill_engine::Engine, _: super::components::StableComponentId, _: &Declaration) -> Result<(Binding, Option<Undo>), pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 970, 'path': '::manifest_apply'}}` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:69`

Register a declaration the table has no entry for.
