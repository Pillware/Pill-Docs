<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1655"></a>

# Function `pill_development_host::csharp::mirror_codegen::parameter_name`

```rust
pub(in csharp::mirror_codegen) fn parameter_name(index: usize, rust_name: &str) -> String;
```

Visibility: `{'restricted': {'parent': 1426, 'path': '::csharp::mirror_codegen'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:711`

The C# parameter name for one argument: the Rust name, or the positional
`arg<index>` when that name is blank or a C# keyword.
