<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3669"></a>

# Constant `pill_development_host::switches::FUNCTION_HOT_PATCHING_VARIABLE`

```rust
pub const FUNCTION_HOT_PATCHING_VARIABLE: &str = "PILL_FUNCTION_HOT_PATCHING";
```

Source: `hosting\pill_development_host\src\switches.rs:42`

The variable that turns the per-function patch fast path on or off.

Off means a watched edit takes the ordinary rebuild-and-reload path
instead of being compiled into the running module.
