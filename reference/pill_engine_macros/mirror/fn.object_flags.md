<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-230"></a>

# Function `pill_engine_macros::mirror::object_flags`

```rust
pub(in mirror) fn object_flags(attribute: proc_macro2::TokenStream) -> syn::Result<ObjectFlags>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::mirror'}}` · Source: `engine\pill_engine_macros\src\mirror.rs:1168`

Parse the attribute's comma-separated flags and `shared = "..."` option.

## Errors

Returns an error for an unknown flag or option, for a `shared` value that is
not a string, and for `shared` without `asset`.
