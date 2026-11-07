<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1746"></a>

# Function `pill_csharp_bridge::mirror_naming::snake_to_pascal`

```rust
pub fn snake_to_pascal(snake_case_name: &str) -> String;
```

Source: `csharp\pill_csharp_bridge\src\mirror_naming.rs:125`

Converts a snake_case Rust identifier to the PascalCase name a C# mirror
uses: each word starts with a capital letter and the underscores are gone.
