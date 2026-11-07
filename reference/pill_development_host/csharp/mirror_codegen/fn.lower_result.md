<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1654"></a>

# Function `pill_development_host::csharp::mirror_codegen::lower_result`

```rust
pub(in csharp::mirror_codegen) fn lower_result(tag: &str, scope: &MirrorScope) -> Result<CsResult, String>;
```

Visibility: `{'restricted': {'parent': 1426, 'path': '::csharp::mirror_codegen'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:587`

Turns one result tag into the C# return type, buffer size and read
statement.

## Errors

Returns an error for anything this file cannot translate: an unsupported
tag or optional payload, a tuple element that is not a primitive, an array
the runtime has no vector type for, a type name the module does not mirror,
or a resource returned by value.
