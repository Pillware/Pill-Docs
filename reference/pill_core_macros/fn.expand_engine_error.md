<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-208"></a>

# Function `pill_core_macros::expand_engine_error`

```rust
pub(crate) fn expand_engine_error(macro_arguments: MacroArguments, error_enum: &mut syn::ItemEnum) -> syn::Result<proc_macro2::TokenStream>;
```

Visibility: `crate` · Source: `engine\pill_core_macros\src\lib.rs:618`

Runs the expansion behind the `engine_error` attribute entry point.

It rewrites every variant: the helper attributes the macro consumes are
removed and the generated `#[error(...)]` and `#[diagnostic(...)]`
attributes are added. It checks the message definitions, then emits the enum
together with its `EngineMessage` implementation.
