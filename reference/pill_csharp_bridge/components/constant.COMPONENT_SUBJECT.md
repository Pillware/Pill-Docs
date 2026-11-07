<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-932"></a>

# Constant `pill_csharp_bridge::components::COMPONENT_SUBJECT`

```rust
pub(crate) const COMPONENT_SUBJECT: super::manifest_apply::ManifestSubject<super::manifest::ManagedManifestEntry, ComponentBinding, ComponentUndo> = _;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\components.rs:654`

The actions the shared apply pipeline needs for managed components.

Everything a component does differently from a resource, and nothing else:
the stages themselves live in [`super::manifest_apply`](../manifest_apply/index.md#rustdoc-item-970).
