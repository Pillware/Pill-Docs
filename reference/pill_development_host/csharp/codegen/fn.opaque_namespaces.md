<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1334"></a>

# Function `pill_development_host::csharp::codegen::opaque_namespaces`

```rust
pub(in csharp::codegen) fn opaque_namespaces(exposed: &[pill_csharp_bridge::ModuleExposedComponent], qualified: &str) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 1288, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:925`

Returns the namespace of the first component whose fields name `qualified`.

Used to place an opaque stand-in that no descriptor declares.
