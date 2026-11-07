<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-569"></a>

# Function `pill_engine::hot_patch::scanned_function_signature`

```rust
pub fn scanned_function_signature(qualified_name: &str) -> Option<&'static str>;
```

Source: `engine\pill_engine\src\hot_patch.rs:248`

Returns the declaration the build-script scan recorded for one function.

It comes from the `PillFunctionAddress` registry.
