<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6218"></a>

# Constant `pill_engine_core::module_abi::MODULE_ABI_VERSION`

```rust
pub const MODULE_ABI_VERSION: u32 = 1;
```

Source: `engine\pill_engine_core\src\module_abi.rs:17`

Revision number of the extension C-ABI export contract.

The host and every extension compile against this one constant. The
`#[pill_module]` macro generates the `pill_module_abi_version` export from
it, so a module and the host built from one workspace always agree on the
revision.

A module built against a different revision is rejected at load time with
a clear error instead of misbehaving silently. A module that exports no
revision is rejected too.
