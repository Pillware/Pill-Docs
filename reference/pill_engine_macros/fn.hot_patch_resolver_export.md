<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-437"></a>

# Function `pill_engine_macros::hot_patch_resolver_export`

```rust
pub(crate) fn hot_patch_resolver_export(export_name: &proc_macro2::Ident, gate: &proc_macro2::TokenStream) -> proc_macro2::TokenStream;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:2871`

The exported resolver every loadable artifact provides.

There is one export rather than one per hot function. The module ABI keeps
its export list small for the same reason: a Windows DLL cannot exceed 65535
exports. A lookup by name is cheap at reload time.
