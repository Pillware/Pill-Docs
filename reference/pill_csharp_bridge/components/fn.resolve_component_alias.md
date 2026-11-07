<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-973"></a>

# Function `pill_csharp_bridge::components::resolve_component_alias`

```rust
pub(in components) fn resolve_component_alias(engine: &pill_engine::Engine, table: &std::collections::HashMap<super::components::StableComponentId, ComponentBinding>, alias: &str) -> Result<Option<StableComponentId>, pill_core::error::CSharpError>;
```

Visibility: `{'restricted': {'parent': 781, 'path': '::components'}}` · Source: `csharp\pill_csharp_bridge\src\components.rs:724`

Resolve one alias to the managed binding it names, if any.

The alias is a name the engine knows, so it is resolved through the registry
first, and the table is then searched for the binding that holds that id. A
resolution that reaches a native binding is ignored: it names a column Rust
owns, and a managed entry cannot inherit its rows.

## Errors

Returns a [`CSharpError`] when the engine knows the name but cannot map it to
one component, which is the ambiguity [`resolve_exposed_component_id`](fn.resolve_exposed_component_id.md#rustdoc-item-888)
reports.
