<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1499"></a>

# Function `pill_csharp_bridge::manifest::parse_default_bytes`

```rust
pub(crate) fn parse_default_bytes(primitive_type: &str, literal: &str) -> Result<Vec<u8>, String>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:652`

Parse one field default literal into native-endian bytes.

Only literals are accepted. A build that compiles the C# ahead of time
cannot evaluate an expression, so the expression would be a default that
exists in the manifest and not in the running world. The literal is parsed
as the field's own declared type, so a mismatch is a named validation error
instead of a surprise at marshalling time.

## Errors

Returns an error when the type has no supported literal form (a
pointer-width type or `Entity`), or when the literal does not parse as that
type.
