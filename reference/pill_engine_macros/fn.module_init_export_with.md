<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-438"></a>

# Function `pill_engine_macros::module_init_export_with`

```rust
pub(crate) fn module_init_export_with(gate: &proc_macro2::TokenStream, init_fn: &proc_macro2::TokenStream, registration_runner: &proc_macro2::TokenStream, register_fn: &proc_macro2::TokenStream) -> proc_macro2::TokenStream;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:3126`

Emits the `pill_module_init` entry point every loadable artifact exports.

One body serves both attributes. A project and an extension share one DLL
contract. They export the same symbols, are loaded the same way, reload
through the same transaction, and keep their retired images the same way.
So the entry point is written once here, and the caller decides which
`#[cfg]` gate, if any, wraps it.

`gate` is empty in both emissions: a project is always built as its own
artifact, and a module's entry points are emitted by the wrapper macro, where
`init_fn` is the path `$crate::` plus the annotated function's name.

`register_fn` is the artifact's registration half, or `no_registration` when
it declares none: the entry point runs the components, then that function,
then the one-time `init`.
