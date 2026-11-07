<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-890"></a>

# Function `pill_csharp_bridge::components::register_component_manifest`

```rust
pub(crate) fn register_component_manifest(engine: &mut pill_engine::Engine, bytes: &[u8], bindings: std::collections::HashMap<StableComponentId, ComponentBinding>) -> Result<std::collections::HashMap<StableComponentId, ComponentBinding>, pill_core::error::CSharpError>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\components.rs:378`

Validate and register all components discovered in the managed assembly.

Shared components must already have a native engine binding; every other
component is registered as managed storage before the bindings are
returned to the caller.

## Errors

Returns a [`CSharpError`] when the manifest is malformed, an identity does
not match its canonical name, a layout is invalid or duplicated, a shared
component has no native binding, or a managed mirror disagrees with the
native component's layout or field schema.
