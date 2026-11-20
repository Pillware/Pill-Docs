<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-378"></a>

# Function `pill_engine_macros::validated_shared_name`

```rust
pub(crate) fn validated_shared_name(literal: &syn::LitStr, subject: &str) -> syn::Result<String>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:1653`

Checks a pinned shared name and returns it: `<prefix>::<Type>`, two
non-empty segments.

The prefix is the crate, or a family name several crates publish under
(`pill_master_renderer::CameraComponent` is declared in
`pill_renderer_api`). A name without a separator would let an unrelated
crate declaring the same word bind to this type's identity; a name with a
module path in the middle would break the rule every stored name follows,
which is what lets a file written before it be read back
(`pill_engine::type_names::names_same_type`).

## Errors

Returns a compile error on `literal` when the name is empty or does not
have exactly two segments. `subject` names the declaration in the message
(`component`, `resource`, `asset`).
