<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1656"></a>

# Function `pill_development_host::csharp::mirror_codegen::emit_member`

```rust
pub(in csharp) fn emit_member(method: &pill_csharp_bridge::ResolvedMirrorMethod, host: &MemberHost<'_>, scope: &MirrorScope) -> Result<String, String>;
```

Visibility: `{'restricted': {'parent': 1331, 'path': '::csharp'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:722`

Writes the C# member, or members, for one mirrored function.

## Errors

Returns an error that names the function when one of its argument or
result tags cannot be translated, or when its receiver cannot be written on
its host.
