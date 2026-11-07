<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-280"></a>

# Type alias `pill_engine_macros::DecoratorArguments`

```rust
pub(crate) type DecoratorArguments = syn::punctuated::Punctuated<syn::Lit, $crate::token::Comma>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:542`

The argument list of a decorator written with parentheses, e.g.
`range(0.0, 100.0)`.
