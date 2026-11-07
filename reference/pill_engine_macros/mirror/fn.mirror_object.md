<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-231"></a>

# Function `pill_engine_macros::mirror::mirror_object`

```rust
pub(crate) fn mirror_object(attribute: proc_macro2::TokenStream, item: syn::Item) -> syn::Result<proc_macro2::TokenStream>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\mirror.rs:1256`

Expand `#[pill_mirror_object]` on a struct or enum.

C# holds the type as a box the managed side owns: a class whose methods are
the `#[pill_mirror_impl]` ones. Functions that return the type create the
box, functions that take it by value move it in, and the drop trampoline
emitted here drops it.

With `asset`, the type also gets the asset store operations that the
runtime's `AssetManager` extension methods call (`__asset_add`, ...).
`import` and `standalone` add the two import paths, for an `ImportedAsset`
or a `StandaloneAsset`.

`shared = "my_crate::MyAsset"` pins the identity that every binary's copy of
an asset type is known by, and emits its `Asset` impl from it: the name and
the identity hashed from that name at compile time.

## Errors

Returns an error for an item that is not a struct or an enum, for a generic
type, and for an attribute `object_flags` refuses.
