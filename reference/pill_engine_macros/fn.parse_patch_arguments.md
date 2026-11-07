<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-434"></a>

# Function `pill_engine_macros::parse_patch_arguments`

```rust
pub(crate) fn parse_patch_arguments(attribute: proc_macro::TokenStream) -> Result<PatchArguments, syn::Error>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:2496`

Parse `name = "...", self_type = Path` from an attribute argument list.

An empty list is the ordinary case: the attribute is being applied by a
developer to their own function or method.
