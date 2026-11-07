<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-0"></a>

# Constant `pill_hot_scan::ABI_ENTRY_POINT_ATTRIBUTES`

```rust
pub(crate) const ABI_ENTRY_POINT_ATTRIBUTES: &[&str] = _;
```

Visibility: `crate` · Source: `hosting\pill_hot_scan\src\lib.rs:47`

Attributes that turn a function into the module ABI's entry point.

The host calls such a function through the loaded library's export table at
load time, never through a redirect, so an address registered for it could
never be used by a patch.

Matched as a suffix so both `#[pill_module]` and a path-qualified
`#[pill_engine::pill_module]` are recognized.
