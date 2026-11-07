<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5212"></a>

# Function `pill_engine_core::hot_patch::check_patching_thread`

```rust
pub(in hot_patch) fn check_patching_thread() -> Result<(), String>;
```

Visibility: `{'restricted': {'parent': 5000, 'path': '::hot_patch'}}` · Source: `engine\pill_engine_core\src\hot_patch.rs:633`

Refuses a patch attempted from anywhere but the declared thread.

## Errors

Returns the message to refuse with. Undeclared means unrestricted.
