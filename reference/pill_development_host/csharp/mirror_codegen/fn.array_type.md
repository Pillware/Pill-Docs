<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1652"></a>

# Function `pill_development_host::csharp::mirror_codegen::array_type`

```rust
pub(in csharp::mirror_codegen) fn array_type(tag: &str) -> Result<String, String>;
```

Visibility: `{'restricted': {'parent': 1426, 'path': '::csharp::mirror_codegen'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:341`

The C# type for an `array:<element>:<length>` tag.

## Errors

Returns an error for any array the runtime has no vector type for. Only
`[f32; 2..=4]` maps to one.
