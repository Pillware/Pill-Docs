<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1414"></a>

# Function `pill_development_host::csharp::codegen::snake_to_camel`

```rust
pub(in csharp::codegen) fn snake_to_camel(snake_case_name: &str) -> String;
```

Visibility: `{'restricted': {'parent': 1362, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:1637`

Returns a snake_case Rust identifier in the camelCase form used for
private C# members: `entry_count` becomes `entryCount`.
