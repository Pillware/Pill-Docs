<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5038"></a>

# Function `pill_engine_core::hot_patch::record_success`

```rust
pub fn record_success(function: &str);
```

Source: `engine\pill_engine_core\src\hot_patch.rs:139`

Clears a function's panic count after an invocation that did not panic.

A process where nothing has panicked - the ordinary one - never locks the
map: one relaxed load of the count above is all this costs.
