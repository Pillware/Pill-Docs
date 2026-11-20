<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1735"></a>

# Function `pill_development_host::csharp::mirror_codegen::emit_free_function_class`

```rust
pub(in csharp) fn emit_free_function_class(module_path: &str, functions: &[&pill_csharp_bridge::ResolvedMirrorMethod], scope: &MirrorScope) -> Result<String, String>;
```

Visibility: `{'restricted': {'parent': 1405, 'path': '::csharp'}}` · Source: `hosting\pill_development_host\src\csharp\mirror_codegen.rs:1026`

Writes the static class that mirrors a module's free functions.

`module_path` is the Rust module that declares them. The class takes its
last segment in PascalCase as its name and sits in the namespace of the
segments before it, so `pill_test::mirror::tint_alpha` reaches C# as
`pill_test.Mirror.TintAlpha()`.

## Errors

Returns an error when one of the functions' argument or result tags cannot
be translated, or when a function carries a receiver.
