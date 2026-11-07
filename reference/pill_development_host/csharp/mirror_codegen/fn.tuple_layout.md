<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1651"></a>

# Function `pill_development_host::csharp::mirror_codegen::tuple_layout`

```rust
pub(in csharp::mirror_codegen) fn tuple_layout(elements: &[&str]) -> Result<Vec<(usize, &'static str)>, String>;
```

Visibility: `{'restricted': {'parent': 1426, 'path': '::csharp::mirror_codegen'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:322`

The byte offset and C# type of each element in a tuple of primitives,
packed the same way `pill_engine_macros`'s `tuple_layout` packs them.

## Errors

Returns an error when an element is not a primitive tag.
