<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1317"></a>

# Function `pill_development_host::csharp::codegen::path_namespace`

```rust
pub(in csharp::codegen) fn path_namespace(qualified: &str) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 1288, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:180`

Returns the C# namespace of a Rust path: every segment before the last,
joined with dots (`pill_dummy_color::Tint` gives `pill_dummy_color`).

Returns `None` when the path has no `::` separator.
