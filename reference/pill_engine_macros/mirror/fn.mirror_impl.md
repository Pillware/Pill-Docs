<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-180"></a>

# Function `pill_engine_macros::mirror::mirror_impl`

```rust
pub(crate) fn mirror_impl(impl_block: syn::ItemImpl) -> syn::Result<proc_macro2::TokenStream>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\mirror.rs:993`

Expand `#[pill_mirror_impl]` on an inherent `impl` block.

## Errors

Returns an error for a trait impl block, for a generic impl block, for a
receiver type that is not a path, and for a marked method `emit_function`
refuses.
