<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-121"></a>

# Function `pill_engine_macros::mirror::lower_return`

```rust
pub(crate) fn lower_return(output: &syn::ReturnType, owner: Option<&Owner>) -> syn::Result<LoweredReturn>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\mirror.rs:707`

Lower a function's result.

`Result<T, E>` (or an alias whose name ends in `Result`) is tagged
`result:<tag of T>`. Its `E: Display` message fails the call. Anything else
is tagged the way [`lower_plain_return`](fn.lower_plain_return.md#rustdoc-item-120) describes.

## Errors

Returns an error when a `Result` names no value type, and for everything
[`lower_plain_return`](fn.lower_plain_return.md#rustdoc-item-120) refuses.
