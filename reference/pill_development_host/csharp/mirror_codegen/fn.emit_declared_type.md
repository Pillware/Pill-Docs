<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1659"></a>

# Function `pill_development_host::csharp::mirror_codegen::emit_declared_type`

```rust
pub(in csharp) fn emit_declared_type(declared: &DeclaredType, methods: &[pill_csharp_bridge::ResolvedMirrorMethod], scope: &MirrorScope) -> Result<String, String>;
```

Visibility: `{'restricted': {'parent': 1331, 'path': '::csharp'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:906`

Writes one declared type and wraps it in its namespace: an object class,
an enum, or a resource marker with the static class of its extension
methods.

## Errors

Returns an error when the type row cannot be written: an enum whose
representation is not a primitive, an enum with mirrored methods, a
resource with no shared name, a value type that should carry no type row,
or a member whose tags cannot be translated.
