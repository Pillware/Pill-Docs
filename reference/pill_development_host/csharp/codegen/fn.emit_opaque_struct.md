<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1329"></a>

# Function `pill_development_host::csharp::codegen::emit_opaque_struct`

```rust
pub(in csharp::codegen) fn emit_opaque_struct(name: &str, size: usize, align: usize) -> Result<String, String>;
```

Visibility: `{'restricted': {'parent': 1288, 'path': '::csharp::codegen'}}` · Source: `hosting\pill_development_host\src\csharp\codegen.rs:843`

Writes an opaque blob struct for a nested type with no `PillMirror`
descriptor.

## Errors

Returns a message when `align` has no matching C# primitive.
