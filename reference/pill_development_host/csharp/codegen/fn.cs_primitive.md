<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1413"></a>

# Function `pill_development_host::csharp::codegen::cs_primitive`

```rust
pub(in csharp::codegen) fn cs_primitive(type_tag: &str) -> Option<(&'static str, usize, usize)>;
```

Visibility: `{'restricted': {'parent': 1362, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:1606`

Returns the C# type, byte size and alignment for a primitive type tag, or
`None` for a tag with no primitive mirror.
