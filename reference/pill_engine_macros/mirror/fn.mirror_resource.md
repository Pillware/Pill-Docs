<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-233"></a>

# Function `pill_engine_macros::mirror::mirror_resource`

```rust
pub(crate) fn mirror_resource(attribute: proc_macro2::TokenStream, item: syn::Item) -> syn::Result<proc_macro2::TokenStream>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\mirror.rs:1428`

Expand `#[pill_mirror_resource("shared::Name")]` on a struct.

Implements `Resource` with that shared name, which is the identity C#
computes for the generated marker type. It also declares the type, so its
`#[pill_mirror_impl]` methods become extension methods on `Res<T>` and
`ResMut<T>`, and a mirrored function can take it as `&T` or `&mut T`.

## Errors

Returns an error when the attribute is not a string literal, and when the
item is not a non-generic struct.
