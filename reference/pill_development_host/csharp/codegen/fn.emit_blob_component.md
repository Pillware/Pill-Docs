<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1324"></a>

# Function `pill_development_host::csharp::codegen::emit_blob_component`

```rust
pub(in csharp::codegen) fn emit_blob_component(name: &str, size: usize, align: usize) -> Result<String, String>;
```

Visibility: `{'restricted': {'parent': 1288, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:464`

Writes the opaque ABI-blob mirror for a component with no field metadata.

## Errors

Returns a message when `align` has no matching C# primitive.
