<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-439"></a>

# Function `pill_engine_macros::module_register_export`

```rust
pub(crate) fn module_register_export(gate: &proc_macro2::TokenStream, register_fn: &proc_macro2::TokenStream) -> proc_macro2::TokenStream;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:3176`

Emit the registration-only entry point of an artifact that declares one.

The host calls this instead of `pill_module_init` on every generation after
the first: the artifact's components come back with the new image, its
`register` function re-registers the systems and resources whose code moved
with it, and its one-time `init` is not run again. An artifact without a
registration function emits nothing here, and the host keeps calling
`pill_module_init`.
