<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-440"></a>

# Function `pill_engine_macros::module_abi_version_export`

```rust
pub(crate) fn module_abi_version_export(gate: &proc_macro2::TokenStream) -> proc_macro2::TokenStream;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:3217`

Emit the ABI revision export the host reads before it calls anything else.

Shared for the same reason [`module_init_export_with`](fn.module_init_export_with.md#rustdoc-item-438) is: the revision
belongs to the one loadable-artifact contract, not to one kind of artifact.
