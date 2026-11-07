<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1497"></a>

# Function `pill_csharp_bridge::manifest::managed_field_layout`

```rust
pub(crate) fn managed_field_layout(component_name: &str, fields: &[ManagedFieldManifest]) -> Vec<pill_engine::component_registry::ComponentFieldDescriptor>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:767`

Convert the top-level fields of a managed component into engine descriptors.

Primitive leaves map onto the engine's type-tag vocabulary so the editor
can decode and edit them. A nested struct stays opaque: it gets one
`struct:` tag and the engine does not walk into it, so its bytes are visible
but not interpretable. Field names and struct tags are interned, so a
component that is re-registered on every reload pays for its strings once.
