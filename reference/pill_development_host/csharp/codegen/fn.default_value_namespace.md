<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1407"></a>

# Function `pill_development_host::csharp::codegen::default_value_namespace`

```rust
pub(in csharp::codegen) fn default_value_namespace(module_name: &str, exposed: &[pill_csharp_bridge::ModuleExposedComponent]) -> String;
```

Visibility: `{'restricted': {'parent': 1362, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:911`

Returns the namespace for a value type that no component references: the
first exposed component's namespace, or `pill_<module_name>` when the module
exposes no components.
