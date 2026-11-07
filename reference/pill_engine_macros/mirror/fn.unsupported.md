<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-90"></a>

# Function `pill_engine_macros::mirror::unsupported`

```rust
pub(in mirror) fn unsupported<impl ToTokens: ToTokens>(ty: &impl ToTokens) -> syn::Error;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::mirror'}}` · Source: `engine\pill_engine_macros\src\mirror.rs:203`

The error for a type outside the vocabulary.
