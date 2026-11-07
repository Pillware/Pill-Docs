<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-178"></a>

# Function `pill_engine_macros::mirror::emit_function`

```rust
pub(crate) fn emit_function(function: MirroredFunction<'_>) -> syn::Result<proc_macro2::TokenStream>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\mirror.rs:797`

Build the trampoline and descriptor submission for one function.

## Errors

Returns an error for a generic or `async` function, for a receiver outside
an `impl` block, and for an argument or result the vocabulary refuses.
