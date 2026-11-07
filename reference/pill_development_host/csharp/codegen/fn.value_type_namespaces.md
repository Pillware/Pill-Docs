<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1335"></a>

# Function `pill_development_host::csharp::codegen::value_type_namespaces`

```rust
pub(in csharp::codegen) fn value_type_namespaces(module_name: &str, exposed: &[pill_csharp_bridge::ModuleExposedComponent], value_types: &[pill_engine::component_registry::PillValueTypeDescriptor]) -> std::collections::HashMap<String, String>;
```

Visibility: `{'restricted': {'parent': 1288, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:950`

Works out the namespace of every value type before anything is written.

A value type goes into the namespace of the first component that references
it, directly or through another value type, so C# sees `pill_spline.Vector3f`
beside `pill_spline.Spline`. A value type no component references goes into
the first component's namespace. When the module exposes no components at
all, it goes into the namespace of its own declaring module, so
`#[derive(PillMirror)]` alone exposes it where a C# project can `using` it.
