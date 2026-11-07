<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-828"></a>

# Constant `pill_development_host::config::CSHARP_COMPILER_MANIFEST`

```rust
pub(crate) const CSHARP_COMPILER_MANIFEST: &str = "csharp/pill_csharp_compiler/pill_csharp_compiler.csproj";
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:86`

Workspace-relative manifest of the in-process C# compiler.

The compiler is deliberately not referenced by any managed project. Roslyn
is large and does not work well with NativeAOT, so the compiler is built
and loaded only when the host enables hot reload, and never reaches a
shipping bundle.
