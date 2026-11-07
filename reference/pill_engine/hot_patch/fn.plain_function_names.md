<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-531"></a>

# Function `pill_engine::hot_patch::plain_function_names`

```rust
pub fn plain_function_names() -> impl Iterator<Item = _>;
```

Source: `engine\pill_engine\src\hot_patch.rs:151`

Returns the name of every `#[pill_hot_fn]` this artifact declares.

These come from the `PillHotSlotDescriptor` registry. The `#[pill_hot]`
systems sit in a different registry and are listed by
[`hot_function_names`](fn.hot_function_names.md#rustdoc-item-530).
