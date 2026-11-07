<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-234"></a>

# Function `pill_engine_macros::mirror::value_type_encodings`

```rust
pub(crate) fn value_type_encodings(ident: &syn::Ident) -> proc_macro2::TokenStream;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\mirror.rs:1505`

The `MirrorValue` and `MirrorReturn` implementations of a value type.

A slot carries the address of the value, which may be larger than a slot. A
slice element and a result carry the value's own bytes.
