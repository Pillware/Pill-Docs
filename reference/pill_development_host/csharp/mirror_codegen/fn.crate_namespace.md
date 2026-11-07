<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1648"></a>

# Function `pill_development_host::csharp::mirror_codegen::crate_namespace`

```rust
pub(in csharp::mirror_codegen) fn crate_namespace(type_name: &str) -> String;
```

Visibility: `{'restricted': {'parent': 1426, 'path': '::csharp::mirror_codegen'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:279`

The namespace a declared type is written into: the root of its crate, so
one `using` reaches every object, enum and resource a module mirrors.
