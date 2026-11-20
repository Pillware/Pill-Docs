<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-377"></a>

# Function `pill_engine_macros::crate_qualified_type_name`

```rust
pub(crate) fn crate_qualified_type_name(ident: &syn::Ident) -> proc_macro2::TokenStream;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:1631`

The stored name of the type `ident` declares: `<crate>::<Type>`.

`CARGO_CRATE_NAME` is the crate's name as every artifact that links it
compiles it, so a module's DLL and a project depending on the same crate
spell the same name, and moving the type to another module leaves it
unchanged. The engine's runtime rule
(`pill_engine::type_names::stable_type_name`) produces the same string for
a type that declares no name of its own, except for `pill_engine_core`'s
own types, which it writes under the public `pill_engine` name - the core
declares its types by hand, so no attribute expands there.

Type names are unique within a crate, which keeps the short form
unambiguous; the artifact entry point refuses an artifact that declares one
name twice.
