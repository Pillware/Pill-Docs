<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-358"></a>

# Function `pill_engine_macros::heap_owned_rejection`

```rust
pub(crate) fn heap_owned_rejection(field_type: &syn::Type, field_type_name: &str) -> syn::Error;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:1500`

The rejection for a heap-owning type outside the container vocabulary.

`String`, `Vec` and `DynamicBuffer` reach this only from a value type that
is mirrored as plain data (`#[derive(PillMirror)]` or `pill_value_type!`).
Such a type has no live row to reach a buffer through.
