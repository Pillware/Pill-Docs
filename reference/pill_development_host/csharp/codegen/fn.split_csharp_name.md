<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1316"></a>

# Function `pill_development_host::csharp::codegen::split_csharp_name`

```rust
pub(in csharp::codegen) fn split_csharp_name(csharp_name: &str) -> Option<(&str, &str)>;
```

Visibility: `{'restricted': {'parent': 1288, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:171`

Splits a C# name such as `pill_spline.Spline` into its namespace and its
type name.
