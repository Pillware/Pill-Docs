<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-201"></a>

# Function `pill_core_macros::build_message_steps`

```rust
pub(crate) fn build_message_steps(runtime_path: &syn::Path, nodes: &[MessageNode]) -> Vec<proc_macro2::TokenStream>;
```

Visibility: `crate` · Source: `engine\pill_core_macros\src\lib.rs:465`

Build the renderer calls for one leaf variant's semantic message.
