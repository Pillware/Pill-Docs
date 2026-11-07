<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1339"></a>

# Function `pill_development_host::csharp::codegen::snake_to_camel`

```rust
pub(in csharp::codegen) fn snake_to_camel(snake_case_name: &str) -> String;
```

Visibility: `{'restricted': {'parent': 1288, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:1625`

Returns a snake_case Rust identifier in the camelCase form used for
private C# members: `entry_count` becomes `entryCount`.
