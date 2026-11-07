<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1653"></a>

# Function `pill_development_host::csharp::mirror_codegen::lower_argument`

```rust
pub(in csharp::mirror_codegen) fn lower_argument(tag: &str, name: &str, scope: &MirrorScope) -> Result<CsArgument, String>;
```

Visibility: `{'restricted': {'parent': 1426, 'path': '::csharp::mirror_codegen'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:369`

Turns one argument tag into its C# parameter declaration, push statement
and forward expression.

## Errors

Returns an error for anything this file cannot translate: an unknown tag,
a slice element or optional payload it does not support, a tuple element
that is not a primitive, an array the runtime has no vector type for, a
type name the module does not mirror, or a resource taken by value, inside
a slice or inside an option.
