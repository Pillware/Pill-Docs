<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-889"></a>

# Function `pill_csharp_bridge::components::module_native_bindings`

```rust
pub(crate) fn module_native_bindings(engine: &mut pill_engine::Engine, exposed_components: &[ModuleExposedComponent]) -> std::collections::HashMap<StableComponentId, ComponentBinding>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\components.rs:318`

Build byte-level bindings for every extension component exposed to
managed code, keyed by the stable identity of its derived C# name.

The bindings are merged into the shared table before the managed manifest
is registered, so a `project_cs` mirror whose full name matches a module
component resolves to the module's native storage instead of being
registered as an unrelated managed component.
