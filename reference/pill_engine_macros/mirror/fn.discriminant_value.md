<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-238"></a>

# Function `pill_engine_macros::mirror::discriminant_value`

```rust
pub(in mirror) fn discriminant_value(expression: &syn::Expr) -> syn::Result<i128>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::mirror'}}` · Source: `engine\pill_engine_macros\src\mirror.rs:1677`

The value of a literal (possibly negated) enum discriminant.

## Errors

Returns an error when the expression is not an integer literal, optionally
negated or in parentheses.
