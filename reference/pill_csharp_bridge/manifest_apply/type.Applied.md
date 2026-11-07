<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1508"></a>

# Type alias `pill_csharp_bridge::manifest_apply::Applied`

```rust
pub(crate) type Applied<Binding, Undo> = Result<(Binding, Option<Undo>), pill_core::error::CSharpError>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest_apply.rs:62`

What a subject action reports: the binding it produced, and how to reverse
it.

`None` in the second slot means the action's effect on the engine cannot be
reversed. That is a property of the kind, not of this call; see the
rollback note in this module's docs.
