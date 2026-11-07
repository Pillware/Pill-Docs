<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1911"></a>

# Constant `pill_development_host::hot_patch::compile::CAPTURE_TIMEOUT`

```rust
pub(in hot_patch::compile) const CAPTURE_TIMEOUT: std::time::Duration = _;
```

Visibility: `{'restricted': {'parent': 1910, 'path': '::hot_patch::compile'}}` · Source: `hosting\pill_development_host\src\hot_patch\compile.rs:50`

The longest time one flag capture may take before it gives up.

This is the same limit the module build's watchdog uses, because the capture
builds the same workspace. If a real build holds the package lock that long,
something is wrong, and the edit falls back to a full reload either way.
