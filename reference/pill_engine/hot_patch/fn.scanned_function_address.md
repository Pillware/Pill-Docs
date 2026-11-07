<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-568"></a>

# Function `pill_engine::hot_patch::scanned_function_address`

```rust
pub fn scanned_function_address(qualified_name: &str) -> Option<usize>;
```

Source: `engine\pill_engine\src\hot_patch.rs:241`

Returns the address of one build-script-scanned function in this artifact.

These come from the `PillFunctionAddress` registry. For a `#[pill_hot_fn]`
slot use [`plain_function_entry`](fn.plain_function_entry.md#rustdoc-item-534), and for a `#[pill_hot]` system use
[`resolve_hot_function`](fn.resolve_hot_function.md#rustdoc-item-567).
