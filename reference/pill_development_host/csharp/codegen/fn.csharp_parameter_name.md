<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1330"></a>

# Function `pill_development_host::csharp::codegen::csharp_parameter_name`

```rust
pub(in csharp) fn csharp_parameter_name(argument_index: usize, rust_name: &str) -> String;
```

Visibility: `{'restricted': {'parent': 1331, 'path': '::csharp'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:867`

Returns the parameter name the generated C# uses for one mirrored-method
argument.

Uses the Rust parameter name the macro captured, or a positional `argN` when
that name is blank or is a C# reserved keyword.
