<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-530"></a>

# Function `pill_engine::hot_patch::hot_function_names`

```rust
pub fn hot_function_names() -> impl Iterator<Item = _>;
```

Source: `engine\pill_engine\src\hot_patch.rs:335`

Returns the name of every `#[pill_hot]` system this artifact declares, for
diagnostics.

These come from the `PillHotFunctionDescriptor` registry. The
`#[pill_hot_fn]` slots sit in a different registry and are listed by
[`plain_function_names`](fn.plain_function_names.md#rustdoc-item-531).
