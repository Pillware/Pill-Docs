<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3670"></a>

# Constant `pill_development_host::switches::ASSETS_HOT_RELOADING_VARIABLE`

```rust
pub const ASSETS_HOT_RELOADING_VARIABLE: &str = "PILL_ASSETS_HOT_RELOADING";
```

Source: `hosting\pill_development_host\src\switches.rs:48`

The variable that turns the asset and shader watchers on or off.

One variable covers the project's `res` folder and both shader trees, so a
run that wants a quiet filesystem switches them off together.
